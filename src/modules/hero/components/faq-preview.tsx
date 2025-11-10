"use client";

import { JsonLd } from "@/modules/seo/json-ld";
import Link from "next/link";
import type { FAQPage, WithContext, BreadcrumbList } from 'schema-dts';
import { useState } from 'react';

export default function FAQPreview() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://studentloancalculator.uk/calculator#faqs",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a UK student loan and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A UK student loan is government-funded support covering Tuition fees and Maintenance loans for eligible students. You start repaying once your income exceeds a plan-specific threshold, with any remaining balance written off after the term ends."
        }
      },
      {
        "@type": "Question",
        name: "When do I begin repaying my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You begin repayments in April after you leave or graduate, provided your annual income exceeds the repayment threshold for your plan. Until then, no repayments are required."
        }
      },
      {
        "@type": "Question",
        name: "How is my student loan repayment amount calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Repayments are a fixed percentage of income above the threshold: usually 9% for undergraduate plans and 6% for postgraduate plans. The exact amount depends on your plan type."
        }
      },
      {
        "@type": "Question",
        name: "What interest rate will apply to my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Interest rates depend on your plan. Some use the lower of RPI or Bank Rate + 1%, while others apply RPI plus a real rate up to +3%. Rates vary by plan and may change annually."
        }
      },
      {
        "@type": "Question",
        name: "Will making extra repayments reduce the total I pay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can make voluntary overpayments, but it's often not financially beneficial since remaining balances may be written off. Evaluate whether the money would be better invested instead."
        }
      },
      {
        "@type": "Question",
        name: "Does my student loan affect my credit score or ability to get a mortgage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Student loans don't appear on credit files, so they don't directly affect credit scores. However, repayments reduce disposable income, which lenders consider when assessing affordability."
        }
      },
      {
        "@type": "Question",
        name: "What happens if I move abroad after graduation or change employment status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you move overseas, you must inform the loan body and complete an income assessment. Repayments may still apply based on overseas thresholds. Income drops or unemployment can pause repayments."
        }
      },
      {
        "@type": "Question",
        name: "If I'm self-employed, how are my student loan repayments handled?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Self-employed borrowers repay through Self Assessment tax returns based on their annual income above the threshold, rather than through automatic payroll deductions."
        }
      },
      {
        "@type": "Question",
        name: "What are the different repayment plans, and how do they differ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are several plans (Plan 1, 2, 4, 5, postgraduate), each with distinct thresholds, write-off periods, and interest calculations depending on when and where you studied."
        }
      },
      {
        "@type": "Question",
        name: "How can the Student Loan Calculator help me understand my repayment situation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator estimates monthly repayments, total cost, and write-off timing based on current thresholds and rates, helping you compare plans and plan your finances effectively."
        }
      },
      {
        "@type": "Question",
        name: "Should I choose to invest instead of overpaying on my student loan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choosing to invest or overpay depends on salary, plan type, interest rate, earnings growth, and risk tolerance. For many borrowers, investing can yield better long-term results."
        }
      },
      {
        "@type": "Question",
        name: "How reliable is the calculator's output, and what assumptions does it use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The calculator provides estimates using current rules and rates, but can't account for future income changes or government policy updates. Treat results as guidance, not guarantees."
        }
      }
    ],
    mainEntityOfPage: { "@id": "https://studentloancalculator.uk/calculator" }
  };

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studentloancalculator.uk/" },
      { "@type": "ListItem", position: 2, name: "Calculator", item: "https://studentloancalculator.uk/calculator" }
    ]
  };

  const faqSections = [
    {
      title: "Basics of Student Loans",
      items: [
        {
          question: "What is a UK student loan and how does it work?",
          answer: "A UK student loan is government-funded support covering Tuition fees and Maintenance loans for eligible students. You start repaying once your income exceeds a plan-specific threshold, with any remaining balance written off after the term ends."
        },
        {
          question: "When do I begin repaying my student loan?",
          answer: "You begin repayments in April after you leave or graduate, provided your annual income exceeds the repayment threshold for your plan. Until then, no repayments are required."
        },
        {
          question: "How is my student loan repayment amount calculated?",
          answer: "Repayments are a fixed percentage of income above the threshold: usually 9% for undergraduate plans and 6% for postgraduate plans. The exact amount depends on your plan type."
        }
      ]
    },
    {
      title: "Repayments, Interest & Financial Impact",
      items: [
        {
          question: "What interest rate will apply to my student loan?",
          answer: "Interest rates depend on your plan. Some use the lower of RPI or Bank Rate + 1%, while others apply RPI plus a real rate up to +3%. Rates vary by plan and may change annually."
        },
        {
          question: "Will making extra repayments reduce the total I pay?",
          answer: "You can make voluntary overpayments, but it's often not financially beneficial since remaining balances may be written off. Evaluate whether the money would be better invested instead."
        },
        {
          question: "Does my student loan affect my credit score or ability to get a mortgage?",
          answer: "Student loans don't appear on credit files, so they don't directly affect credit scores. However, repayments reduce disposable income, which lenders consider when assessing affordability."
        }
      ]
    },
    {
      title: "Special Circumstances & Loan Plans",
      items: [
        {
          question: "What happens if I move abroad after graduation or change employment status?",
          answer: "If you move overseas, you must inform the loan body and complete an income assessment. Repayments may still apply based on overseas thresholds. Income drops or unemployment can pause repayments."
        },
        {
          question: "If I'm self-employed, how are my student loan repayments handled?",
          answer: "Self-employed borrowers repay through Self Assessment tax returns based on their annual income above the threshold, rather than through automatic payroll deductions."
        },
        {
          question: "What are the different repayment plans, and how do they differ?",
          answer: "There are several plans (Plan 1, 2, 4, 5, postgraduate), each with distinct thresholds, write-off periods, and interest calculations depending on when and where you studied."
        }
      ]
    },
    {
      title: "Using the Calculator Tool & Making Decisions",
      items: [
        {
          question: "How can the Student Loan Calculator help me understand my repayment situation?",
          answer: "The calculator estimates monthly repayments, total cost, and write-off timing based on current thresholds and rates, helping you compare plans and plan your finances effectively."
        },
        {
          question: "Should I choose to invest instead of overpaying on my student loan?",
          answer: "Choosing to invest or overpay depends on salary, plan type, interest rate, earnings growth, and risk tolerance. For many borrowers, investing can yield better long-term results."
        },
        {
          question: "How reliable is the calculator's output, and what assumptions does it use?",
          answer: "The calculator provides estimates using current rules and rates, but can't account for future income changes or government policy updates. Treat results as guidance, not guarantees."
        }
      ]
    }
  ];

  let globalIndex = 0;

  return (
    <>
      <JsonLd code={faqSchema} />
      <JsonLd code={breadcrumbSchema} />

      <section className="max-w-4xl mx-auto px-6" aria-labelledby="faq-heading">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get quick answers to common questions about UK student loans
          </p>
        </div>

        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{section.title}</h3>
            <div className="space-y-3">
              {section.items.map((item) => {
                const currentIndex = globalIndex++;
                const isOpen = openItems.has(currentIndex);
                
                return (
                  <div key={currentIndex} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleItem(currentIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${currentIndex}`}
                    >
                      <span className="text-lg font-semibold text-gray-800 pr-8">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      id={`faq-answer-${currentIndex}`}
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        isOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-4 pt-2 text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <Link
            href="/faqs/"
            aria-label="View all frequently asked questions about student loans"
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            View All FAQs
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}