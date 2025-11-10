import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I have to pay my student loan back?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, but only when you earn over the repayment threshold for your plan type. Repayments are automatically taken from your salary through PAYE. Any remaining balance is written off after the end of your loan term (25–40 years depending on your plan).",
        },
      },
      {
        "@type": "Question",
        name: "How much will I pay back each month?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You pay 9% of your income above the threshold for undergraduate loans (Plan 1, 2, 4, 5) and 6% above the threshold for Postgraduate loans. For example, on Plan 2 with a £30,000 salary, you would pay 9% of the amount over £27,295, which equals approximately £20 per month.",
        },
      },
      {
        "@type": "Question",
        name: "Does my student loan affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No, student loans do not appear on your credit file and don&apos;t affect your credit score. They won&apos;t impact your ability to get a mortgage or other loans, although lenders may consider your student loan repayments when assessing affordability.",
        },
      },
      {
        "@type": "Question",
        name: "Should I pay off my student loan early?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "For most people, making voluntary overpayments isn&apos;t recommended as the majority of borrowers won&apos;t repay the full amount before it&apos;s written off. However, high earners on certain plans might benefit from early repayment. Use our Overpayment Calculator to assess your personal situation.",
        },
      },
    ],
  } as const;

  return (
    <main className="space-y-12">
      {/* SEO: JSON-LD for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hero / Breadcrumb */}
          <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="breadcrumb">
                <ol className="flex items-center space-x-1 text-sm text-gray-600">
                  <li>
                    <Link href="/" className="hover:text-blue-700 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </li>
                  <li>
                    <span className="font-medium text-gray-800" aria-current="page">
                      FAQs
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Breadcrumb JSON-LD */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.co.uk" },
                      { "@type": "ListItem", position: 2, name: "FAQs", item: "https://studentloancalculator.co.uk/faqs" },
                    ],
                  }),
                }}
              />

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">UK Student Loan FAQs</h1>
              <p className="text-xl text-gray-600">Find answers to common questions about student loans, repayments, and finances.</p>
            </div>
          </section>

          {/* Intro copy */}
          <section className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700">
              Understanding student loans can be complex. We&apos;ve compiled the most frequently asked questions to help you navigate the UK student finance system. From repayment thresholds to interest rates, find clear answers to your student loan questions.
            </p>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Navigation</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="#basics-of-student-loans" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">Basics of Student Loans</Link>
                <Link href="#repayments" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">Repayments</Link>
                <Link href="#interest-and-financial-impact" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">Interest and Financial Impact</Link>
                <Link href="#special-circumstances" className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">Special Circumstances</Link>
              </div>
            </div>
          </section>

          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Basics */}
            <section id="basics-of-student-loans" className="scroll-mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Basics of Student Loans</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">Do I have to pay my student loan back?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      Yes, but only when you earn over the repayment threshold for your plan type. Repayments are automatically taken from your salary through PAYE. Any remaining balance is written off after the end of your loan term (25–40 years depending on your plan).
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">When do I start repaying my student loan?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      You&apos;ll start repaying your student loan from the April after you graduate or leave your course, and only once you&apos;re earning over the repayment threshold for your loan plan. For most recent graduates, repayments won&apos;t start until you&apos;re in employment and earning above the threshold.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">How much can I borrow for my student loan?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      For undergraduate degrees, you can borrow for full tuition fees (up to £9,250 per year at most universities) and maintenance loans for living costs (between £3,597 and £13,022 per year depending on your household income and whether you&apos;re living away from home). Postgraduate loans provide up to £12,167 for Master&apos;s courses and up to £27,892 for PhDs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What is the difference between a tuition fee loan and a maintenance loan?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      A tuition fee loan covers the cost of your course and is paid directly to your university or college. A maintenance loan helps with living costs like accommodation and food, and is paid into your bank account at the start of each term. Both are repaid in the same way once you&apos;re earning over the threshold.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Repayments */}
            <section id="repayments" className="scroll-mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Repayments</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">How much will I pay back each month?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      You pay 9% of your income above the threshold for undergraduate loans (Plan 1, 2, 4, 5) and 6% above the threshold for Postgraduate loans. For example, on Plan 2 with a £30,000 salary, you would pay 9% of the amount over £27,295, which equals approximately £20 per month.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">How are student loan repayments calculated?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      Repayments are calculated as a percentage of your income above the threshold: 9% for undergraduate loans and 6% for postgraduate loans. They&apos;re usually deducted automatically from your salary by your employer. If you&apos;re self-employed, repayments are calculated as part of your annual tax return.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">Can I make extra repayments to clear my student loan faster?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      Yes, you can make voluntary repayments at any time through your online account with the Student Loans Company. However, for most people, it may not be financially beneficial to do so, as any remaining balance is written off after the repayment period ends. Use our Overpayment Calculator to see if it makes financial sense for your situation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What happens if I go abroad after graduation?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      If you move overseas, you&apos;re still required to repay your student loan. You&apos;ll need to notify the Student Loans Company and complete an Overseas Income Assessment form. Repayment thresholds are adjusted for the cost of living in different countries, and you&apos;ll make repayments directly to the SLC rather than through PAYE.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Interest & financial impact */}
            <section id="interest-and-financial-impact" className="scroll-mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Interest and Financial Impact</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-9" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What is the interest rate on student loans?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      Interest rates vary by loan plan. Plan 1 and Plan 4 use the lower of RPI or Bank of England base rate + 1%. Plan 2 varies from RPI to RPI+3% depending on income. Plan 5 has RPI+0% during study, then varies with RPI. Postgraduate loans have a fixed rate of RPI+3%.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">Does my student loan affect my credit score?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      No, student loans do not appear on your credit file and don&apos;t affect your credit score. They won&apos;t impact your ability to get a mortgage or other loans, although lenders may consider your student loan repayments when assessing affordability.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">Will having a student loan affect my ability to get a mortgage?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      Student loans don&apos;t directly affect mortgage applications as they don&apos;t appear on your credit file. However, since repayments reduce your monthly income, lenders will factor this into affordability calculations. For most borrowers, the impact is minimal, as repayments are proportional to earnings.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">Should I pay off my student loan early?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      For most people, making voluntary overpayments isn&apos;t recommended as the majority of borrowers won&apos;t repay the full amount before it&apos;s written off. However, high earners on certain plans might benefit from early repayment. Use our Overpayment Calculator to assess your personal situation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Special circumstances */}
            <section id="special-circumstances" className="scroll-mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Special Circumstances</h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-13" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What happens to my student loan if I drop out of university?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      If you leave your course early, you&apos;ll still need to repay the loans you&apos;ve received so far. The repayment terms remain the same — you&apos;ll only start repaying once you earn over the threshold, and any remaining balance will be written off after the normal term period. You may need to repay some of your most recent maintenance loan if you leave during a term.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">How do student loans work if I&apos;m self-employed?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      If you&apos;re self-employed, you&apos;ll make student loan repayments through Self Assessment. You&apos;ll pay the same percentage above the threshold as employed graduates. These payments are calculated when you file your tax return and will be included in your payment on account and balancing payment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What happens to my loan repayments if I take maternity/paternity leave?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      During maternity, paternity, or shared parental leave, your repayments will adjust based on your actual income. If your income drops below the repayment threshold, your repayments will automatically stop until you begin earning above the threshold again. This period still counts toward your loan&apos;s write-off term.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="bg-white rounded-xl shadow-sm overflow-hidden border">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="text-lg font-medium text-gray-800">What happens to my student loan if I die?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0">
                    <p className="text-gray-600">
                      If a borrower dies, their student loan is cancelled. The Student Loans Company will require evidence such as a death certificate. No further repayments will be required, and the loan will not become part of the deceased person&apos;s estate or pass to their family.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
          </div>

          {/* CTA */}
          <section className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl text-white p-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Need More Specific Information?</h2>
              <p className="text-lg text-blue-100">Use our calculators to understand your specific repayment situation or read our in-depth guides about student finance.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/calculators" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all">Try Our Calculators</Link>
                <Link href="/guides" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition-all">Read Our Guides</Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}