import React from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/common/tableOfContent';
import DrLilaDesc from '@/components/common/dr-lila-desc';

const MovingAbroadStudentLoans: React.FC = () => {
  const tocItems = [
    { id: "notification-requirement", title: "The Notification Requirement: Three Months Before Leaving", level: 2 },
    { id: "income-assessment", title: "How Overseas Income Assessment Works", level: 2 },
    { id: "country-thresholds", title: "Country-Specific Thresholds", level: 2 },
    { id: "currency-conversion", title: "Currency Conversion and Exchange Rate Issues", level: 2 },
    { id: "payment-methods", title: "Direct Debit vs Manual Payments", level: 2 },
    { id: "penalties-enforcement", title: "Penalties and Enforcement", level: 2 },
    { id: "returning-uk", title: "Returning to the UK: Restarting PAYE Deductions", level: 2 },
    { id: "self-employment", title: "Self-Employment and Freelancing Abroad", level: 2 },
    { id: "strategic-considerations", title: "Strategic Considerations: Is It Worth Paying?", level: 2 },
    { id: "record-keeping", title: "Record Keeping for Overseas Borrowers", level: 2 },
    { id: "taking-control", title: "Taking Control of Overseas Repayments", level: 2 },
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
                  Moving Abroad with Student Loans
                </span>
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Student Loans When Moving Abroad: Overseas Repayment Rules
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to UK student loan repayments when moving abroad. Notification requirements, overseas thresholds, and avoiding penalties.
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
                Moving abroad is exciting, whether for career opportunities, lifestyle changes, or following a partner. But if you have UK student loans, leaving the country doesn&apos;t mean leaving your repayment obligations behind. The Student Loans Company has an entire overseas repayment system with different rules, thresholds, and enforcement mechanisms than the PAYE system you&apos;re used to in the UK.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The most critical thing to understand is the notification requirement. You must tell the Student Loans Company at least three months before you leave the UK. Failure to notify can result in penalties up to £1,000, and more importantly, it can cause serious administrative problems with your loan that take months or years to resolve. Many people assume their UK student loan simply pauses when they move abroad, or that the SLC will somehow know they&apos;ve left. Neither is true.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What catches people off-guard is that repayment obligations continue based on your worldwide income, but calculated using country-specific thresholds that often differ from UK thresholds. Depending on where you move, you might pay more or less than you would in the UK on the same salary. And unlike PAYE which happens automatically through your employer, overseas repayments require you to actively report your income and make payments manually, creating administrative burden and opportunities for things to go wrong.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding the overseas repayment system before you leave helps you budget accurately, stay compliant with requirements, avoid penalties, and ensure your loan status remains in good standing if you eventually return to the UK.
              </p>
            </section>

            {/* The Notification Requirement */}
            <section id="notification-requirement" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                The Notification Requirement: Three Months Before Leaving
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You&apos;re legally required to notify the Student Loans Company that you&apos;re leaving the UK to live or work abroad. The notification should happen at least three months before your departure date, though SLC accepts notifications with less notice if your move is urgent.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How to notify:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Log into your Student Loans Company account online, or call the overseas helpline on +44 141 243 3660 (if calling from abroad). You&apos;ll need to provide:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Your departure date</li>
                  <li>The country you&apos;re moving to</li>
                  <li>Your contact details in the new country (or best contact details if you don&apos;t have an address yet)</li>
                  <li>Employment status and expected income in the new country</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  The SLC will send you information about your overseas repayment obligations specific to the country you&apos;re moving to, including the income threshold for that country and how to make payments.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">What happens if you don&apos;t notify:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  The SLC can charge penalties up to £1,000 for failure to notify them about leaving the UK. But the financial penalty is often the least of your problems. If you don&apos;t notify:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                  <li>Your UK-based repayment status remains active, but you&apos;re not making payments</li>
                  <li>The SLC might assume you&apos;re deliberately avoiding repayment</li>
                  <li>Interest continues accumulating on your loan balance</li>
                  <li>You might be reported to credit agencies as failing to meet obligations</li>
                  <li>When you eventually return to the UK or contact SLC, you&apos;ll have backdated payments to catch up on, potentially with added interest and penalties</li>
                </ul>
                <p className="text-gray-700 text-sm">
                  Worse, if you&apos;re not in the overseas system properly, you can&apos;t access your loan information correctly, you might have problems returning to the UK later, and sorting out the administrative mess takes substantial time and effort.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>The notification requirement isn&apos;t optional or a suggestion. It&apos;s a legal obligation that protects both you and the SLC. Take it seriously.</strong>
                </p>
              </div>
            </section>

            {/* How Overseas Income Assessment Works */}
            <section id="income-assessment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How Overseas Income Assessment Works
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once you&apos;re in the overseas repayment system, you&apos;re required to provide evidence of your income to the SLC annually. This differs fundamentally from UK PAYE, where your employer reports your income and deducts loans automatically.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Annual income assessment:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Each year, you&apos;ll receive a request from the SLC to submit evidence of your income for the previous year. This typically includes:
                </p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employment contracts showing salary</li>
                  <li>Payslips covering the year</li>
                  <li>Tax returns from your country of residence</li>
                  <li>Bank statements if you&apos;re self-employed</li>
                  <li>Evidence of any other income sources</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  The SLC uses this information to calculate your repayment obligation for the coming year. They convert your income to pounds sterling, apply the country-specific threshold, and determine your annual repayment amount.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Income categories:</h3>
                <p className="text-gray-700 text-sm mb-2">The SLC assesses all your worldwide income, including:</p>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Employment income and salaries</li>
                  <li>Self-employment profits</li>
                  <li>Rental income from property anywhere in the world</li>
                  <li>Investment income, dividends, and interest</li>
                  <li>Benefits or allowances that count as taxable income in your country of residence</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  Just like in the UK, you can&apos;t hide income by categorizing it differently. If you earn it and it&apos;s above the threshold, you owe repayments on it.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Failure to provide income information:</h3>
                <p className="text-gray-700 text-sm">
                  If you don&apos;t respond to income assessment requests, the SLC can make assumptions about your income based on average earnings in your country and profession. These assumptions are often high, potentially resulting in you being charged more than you actually owe. You&apos;ll then need to provide evidence after the fact to get reassessed, creating hassle.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  Always respond to income assessment requests promptly with complete documentation. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> student loan calculator</Link> can help you estimate what you&apos;ll owe based on your overseas income.
                </p>
              </div>
            </section>

            {/* Country-Specific Thresholds */}
            <section id="country-thresholds" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Country-Specific Thresholds
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Here&apos;s where overseas repayments get complicated. The threshold used to calculate your repayment isn&apos;t necessarily the UK threshold you&apos;re familiar with. The SLC sets different thresholds for different countries based on cost of living and average incomes in those locations.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The thresholds are meant to maintain rough equivalence to the UK system, but they don&apos;t always feel equivalent when you&apos;re living in the country.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">United States</h3>
                  <p className="text-gray-700 text-sm">Approximately £30,000 equivalent</p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Australia</h3>
                  <p className="text-gray-700 text-sm">Approximately £27,000 equivalent</p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Canada</h3>
                  <p className="text-gray-700 text-sm">Approximately £26,000 equivalent</p>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">United Arab Emirates</h3>
                  <p className="text-gray-700 text-sm">Approximately £31,000 equivalent</p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Singapore</h3>
                  <p className="text-gray-700 text-sm">Approximately £32,000 equivalent</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">India</h3>
                  <p className="text-gray-700 text-sm">Approximately £16,000 equivalent</p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Thailand</h3>
                  <p className="text-gray-700 text-sm">Approximately £15,000 equivalent</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Why thresholds differ:</h3>
                <p className="text-gray-700 text-sm">
                  Higher cost-of-living countries typically have higher thresholds, while lower cost-of-living countries have lower thresholds. The intent is that you have similar discretionary income after essential expenses regardless of location.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">But this doesn&apos;t always work perfectly:</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Example 1:</h4>
                    <p className="text-gray-700 text-sm">
                      Someone earning £25,000 equivalent in London pays nothing (below UK threshold). That same person earning £25,000 equivalent in Bangkok might pay student loans because Thailand&apos;s threshold is lower. Yet £25,000 in Bangkok provides much higher living standards than £25,000 in London.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Example 2:</h4>
                    <p className="text-gray-700 text-sm">
                      Earning £50,000 in New York might feel less comfortable than £35,000 in the UK due to costs, but you&apos;d pay student loans based on the higher absolute number with minimal threshold adjustment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Check your threshold before moving:</h3>
                <p className="text-gray-700 text-sm">
                  Before accepting a job offer abroad, check the SLC threshold for that country. Calculate what you&apos;ll actually pay in student loans based on your expected income and that threshold. Factor this into your financial assessment of whether the move makes sense.
                </p>
              </div>
            </section>

            {/* Currency Conversion and Exchange Rate Issues */}
            <section id="currency-conversion" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Currency Conversion and Exchange Rate Issues
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your overseas income gets converted to pounds sterling for student loan calculations. The SLC uses periodic exchange rates, but these rates might not match the reality of your finances.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How conversion works:</h3>
                <p className="text-gray-700 text-sm">
                  The SLC typically uses an annual average exchange rate or rates at specific points in the year. If you earn $60,000 USD, they&apos;ll convert this to pounds using their exchange rate to determine if you&apos;re above the threshold and calculate your repayment.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Example Calculation:</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>US salary: $60,000</li>
                  <li>SLC conversion rate: 1.25 (example)</li>
                  <li>Sterling equivalent: £48,000</li>
                  <li>US threshold for Plan 2: approximately £30,000</li>
                  <li>Amount above threshold: £18,000</li>
                  <li><strong>Repayment: £18,000 × 9% = £1,620 annually</strong></li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Exchange Rate Fluctuation Impact:</h3>
                <p className="text-gray-700 text-sm">
                  If exchange rates fluctuate significantly during the year, your actual experience might differ. If the pound strengthens against the dollar, your sterling-equivalent income appears lower than at the start of the year, potentially reducing what you owe. If the pound weakens, your sterling-equivalent income rises, increasing what you owe. You have limited control over this. The SLC applies their rates regardless of what exchange rate you actually experienced when converting your salary for living expenses.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Making payments in foreign currency:</h3>
                <p className="text-gray-700 text-sm mb-2">
                  When you make repayments, you typically pay in pounds sterling, which means you&apos;re converting currency potentially twice (your income to sterling for calculation, then sterling back to your currency for payment). Currency conversion fees can add 2-3% to your effective repayment cost.
                </p>
                <p className="text-gray-700 text-sm">
                  Some payment methods minimize this. Direct debit from a UK bank account (if you maintain one) avoids conversion. International transfers often carry fees. Check the most cost-effective payment method for your situation.
                </p>
              </div>
            </section>

            {/* Direct Debit vs Manual Payments */}
            <section id="payment-methods" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Direct Debit vs Manual Payments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The SLC offers two main payment methods for overseas borrowers:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Direct Debit from UK bank account:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you maintain a UK bank account, you can set up direct debit to pay your calculated annual obligation in monthly installments. This is the most similar to the PAYE experience you had in the UK.
                  </p>

                  <h4 className="font-semibold text-gray-800 text-sm mb-1 mt-3">Benefits:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Automatic, no risk of missing payments</li>
                    <li>Spread over 12 months, easier to budget</li>
                    <li>No currency conversion if you&apos;re maintaining sterling in your UK account</li>
                    <li>Similar to PAYE convenience</li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Drawbacks:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Requires maintaining a UK bank account, which some banks make difficult for non-residents</li>
                    <li>You need to ensure sufficient funds are in the account each month</li>
                    <li>Direct debit amounts are based on assessed annual income and might not adjust if your income changes mid-year</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Manual payments:</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    You can pay via bank transfer, check, or online payment. Payments can be made monthly, quarterly, or annually as you prefer.
                  </p>

                  <h4 className="font-semibold text-gray-800 text-sm mb-1 mt-3">Benefits:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm mb-2">
                    <li>Flexibility in timing and payment size</li>
                    <li>Can adjust payments if your income changes</li>
                    <li>Don&apos;t need to maintain UK bank account</li>
                  </ul>

                  <h4 className="font-semibold text-gray-800 text-sm mb-1">Drawbacks:</h4>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Easy to forget or miss payments, risking penalties</li>
                    <li>Administrative burden of initiating payment each time</li>
                    <li>Potential for currency conversion fees each transaction</li>
                    <li>Requires tracking and remembering payment obligations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  Most people in stable employment abroad prefer direct debit for the convenience and automatic nature. Those with variable income or who&apos;ve fully moved their financial life out of the UK often use manual payments.
                </p>
              </div>
            </section>

            {/* Penalties and Enforcement */}
            <section id="penalties-enforcement" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Penalties and Enforcement
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The SLC has limited direct enforcement mechanisms against people living abroad, but that doesn&apos;t mean you can simply ignore your obligations without consequences.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Penalties for non-compliance:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Up to £1,000 for failing to notify SLC about leaving UK</li>
                  <li>Interest charges on unpaid amounts</li>
                  <li>Potential additional penalties for persistent non-payment</li>
                  <li>Damage to your credit record that can affect you if you return to UK or apply for credit internationally</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">How enforcement works (or doesn&apos;t):</h3>
                <p className="text-gray-700 text-sm mb-2">
                  The SLC cannot garnish wages abroad. Your overseas employer won&apos;t deduct student loans automatically. The SLC can&apos;t seize overseas assets easily or use UK enforcement mechanisms against you while you&apos;re non-resident.
                </p>
                <p className="text-gray-700 text-sm">
                  This leads some people to simply stop paying, betting that enforcement is difficult. This is short-sighted for several reasons:
                </p>
              </div>

              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Reason 1: You might return to the UK</h3>
                  <p className="text-gray-700 text-sm">
                    If you return to UK employment, PAYE deductions restart immediately. But you&apos;ll also owe all the accumulated unpaid amounts from your time abroad, potentially with interest and penalties. This can be thousands of pounds landing on you unexpectedly.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Reason 2: Loan balance continues growing</h3>
                  <p className="text-gray-700 text-sm">
                    Even if you&apos;re not paying, interest accumulates. Your loan balance grows by thousands of pounds annually depending on your plan and balance. When write-off eventually happens (or if you return to UK), you&apos;ve accumulated massive additional interest for no benefit.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Reason 3: Administrative complications</h3>
                  <p className="text-gray-700 text-sm">
                    Being out of compliance with SLC makes everything harder. Accessing your account information, updating details, or sorting out any issues becomes difficult. If you need any interaction with UK government systems, having student loan non-compliance can cause problems.
                  </p>
                </div>

                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold text-gray-900 mb-2">Reason 4: They&apos;re getting better at international enforcement</h3>
                  <p className="text-gray-700 text-sm">
                    The SLC is increasingly working with international partners and credit agencies. Future enforcement might become more effective. Being in good standing now avoids potential problems as systems improve.
                  </p>
                </div>
              </div>
            </section>

            {/* Returning to the UK */}
            <section id="returning-uk" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Returning to the UK: Restarting PAYE Deductions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you return to UK employment after living abroad, student loan deductions should restart automatically through PAYE. However, this doesn&apos;t always happen smoothly.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Ideal scenario:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>You notify SLC you&apos;re returning to the UK</li>
                  <li>SLC updates HMRC with your loan status</li>
                  <li>Your new UK employer receives correct tax code including SL/PGL markers</li>
                  <li>Deductions restart from your first UK payslip</li>
                  <li>Your overseas payment obligations cease</li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Problem 1: Tax code missing loan markers</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    Your tax code might not include SL when you return, meaning no deductions happen. This creates underpayment that you&apos;ll owe later through Self Assessment or adjusted PAYE.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solution:</strong> Check your first UK payslip carefully. If it doesn&apos;t show student loan deductions and you definitely have a student loan, contact HMRC immediately to update your tax code.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Problem 2: Overlap period</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    You might have paid your overseas obligation for the full year, then return mid-year and restart PAYE deductions, effectively paying twice for the overlap period.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solution:</strong> Contact SLC when you return and explain you&apos;ve already paid overseas. They should adjust your UK obligation to account for what you&apos;ve already paid. Keep records of overseas payments.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Problem 3: Outstanding overseas obligations</h3>
                  <p className="text-gray-700 text-sm mb-2">
                    If you didn&apos;t pay in full while abroad or have accumulated arrears, these don&apos;t automatically disappear when you return. HMRC might try to collect them through adjusted tax codes or you might receive direct demands from SLC.
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Solution:</strong> Address any arrears before returning if possible. If you can&apos;t, contact SLC when you return to arrange payment plans.
                  </p>
                </div>
              </div>
            </section>

            {/* Self-Employment and Freelancing Abroad */}
            <section id="self-employment" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Self-Employment and Freelancing Abroad
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Working abroad as a self-employed freelancer or consultant creates additional complexity. You&apos;re responsible for calculating your own income, converting it to sterling, determining your obligation, and paying it.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The SLC requires the same annual income assessment, but with additional documentation:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Business accounts showing profit (not just revenue)</li>
                  <li>Tax returns filed in your country of residence</li>
                  <li>Evidence of business expenses you&apos;ve deducted</li>
                  <li>Bank statements showing business income and expenses</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> You pay student loans on profit, not revenue. If you earn $80,000 but have $30,000 in legitimate business expenses, your profit is $50,000 and that&apos;s what gets assessed for student loans.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-gray-700 text-sm">
                  Keep meticulous records. The SLC might query your income assessment, and you&apos;ll need to provide evidence to support your declared income and expenses.
                </p>
              </div>
            </section>

            {/* Strategic Considerations */}
            <section id="strategic-considerations" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Strategic Considerations: Is It Worth Paying?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some people abroad face a difficult decision: should they pay their student loans while overseas, given enforcement difficulties?
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Reasons to pay:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Legal and moral obligation</li>
                    <li>Avoid complications if you return to UK</li>
                    <li>Maintain good credit standing</li>
                    <li>Interest continues whether you pay or not</li>
                    <li>You might face improved enforcement in future</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Reasons some consider not paying:</h3>
                  <ul className="list-disc ml-6 text-gray-700 text-sm">
                    <li>Enforcement is difficult for SLC abroad</li>
                    <li>Money might be better used elsewhere in immediate term</li>
                    <li>Write-off will happen eventually regardless (30-40 years)</li>
                    <li>Particularly tempting if you&apos;re certain you&apos;ll never return to UK</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  This is a personal decision. From a purely financial perspective, if you&apos;re genuinely never returning to the UK and enforcement is limited, not paying might save money in the short term. But it creates risks and complications. Most financial advisors recommend maintaining compliance unless you&apos;re absolutely certain you&apos;re never returning to the UK and comfortable with the ethical implications.
                </p>
              </div>
            </section>

            {/* Record Keeping */}
            <section id="record-keeping" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Record Keeping for Overseas Borrowers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Keep comprehensive records of all overseas repayment activity:
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Essential records to maintain:</h3>
                <ul className="list-disc ml-6 text-gray-700 text-sm">
                  <li>Copies of annual income assessments you submit</li>
                  <li>Evidence of all payments made (bank transfer confirmations, receipts)</li>
                  <li>Correspondence with SLC about your overseas status</li>
                  <li>Employment contracts and payslips from overseas work</li>
                  <li>Tax returns filed in your country of residence</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-gray-700 text-sm">
                  If there are ever disputes about what you owe, when you paid, or whether you&apos;ve met obligations, these records are essential to defend your position. Store them digitally in multiple locations (cloud storage, email to yourself) so they&apos;re accessible even if you move between countries multiple times.
                </p>
              </div>
            </section>

            {/* Taking Control of Overseas Repayments */}
            <section id="taking-control" className="mb-8 scroll-mt-24">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Taking Control of Overseas Repayments
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moving abroad doesn&apos;t eliminate student loan obligations, but it does make them more complicated. The shift from automatic PAYE deductions to manual overseas repayments requires active engagement and administrative discipline.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">The critical steps:</h3>
                <ol className="list-decimal ml-6 text-gray-700 text-sm">
                  <li>Notify SLC at least three months before leaving (or immediately after if you&apos;ve already left)</li>
                  <li>Understand the threshold for your destination country</li>
                  <li>Respond to annual income assessment requests promptly</li>
                  <li>Set up reliable payment method (direct debit or manual)</li>
                  <li>Track payments and keep records</li>
                  <li>Update SLC if you change countries or return to UK</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-gray-700 text-sm">
                  Use our <Link target="_blank" href="https://studentloancalculator.uk/calculators/monthly-repayment-calculator/" className="text-blue-600 underline hover:text-blue-800"> Monthly Repayment Calculator </Link> to estimate what you&apos;ll owe based on your overseas salary and the country-specific threshold. Our <Link target="_blank" href="https://studentloancalculator.uk/" className="text-blue-600 underline hover:text-blue-800"> plan-specific calculators </Link> help you understand your obligations for your particular loan type.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Moving abroad is exciting and offers tremendous opportunities. Don&apos;t let student loan complications overshadow that. But don&apos;t ignore them either. With proper notification, understanding of the system, and compliance with requirements, managing your UK student loan from overseas is straightforward, leaving you free to focus on making the most of your international experience.
              </p>
            </section>

            {/* Final Call to Action */}
            <section className="text-center py-8 border-t border-gray-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The worst outcome is finding yourself returning to the UK years later with accumulated arrears, penalties, and administrative nightmares to sort through. Spend a few hours now understanding the system and setting up proper repayment arrangements, and you&apos;ll avoid months of problems later.
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

export default MovingAbroadStudentLoans;