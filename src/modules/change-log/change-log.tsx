"use client";

import React, { useState } from 'react';
import { Calculator, BookOpen, TrendingUp, PoundSterling, GraduationCap, FileText, GitCommit, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
  items: string[];
}

const ChangelogComponent: React.FC = () => {
  const [selectedVersion, setSelectedVersion] = useState<string>('2.0.0');

  const changelog: ChangelogEntry[] = [
    {
      version: '2.0.0',
      date: '2024-11-03',
      type: 'added',
      items: [
        // NEW Calculators in Version 2.0
        'Combined Repayment Calculator - Calculate combined loan repayments across multiple plans',
        'Early Payoff Date Calculator - Determine when you can pay off your loan early',
        'Graduation Year Impact Calculator - See how graduation year affects your repayments',
        'Income Threshold Alert Calculator - Get alerts when you approach repayment thresholds',
        'Inflation Impact Calculator - Factor inflation into long-term loan calculations',
        'Loan Writeoff Checker - Enhanced checker for loan forgiveness dates',
        'Maternity/Paternity Leave Adjustment Calculator - Calculate repayments during parental leave',
        'Part Time Earnings Calculator - Specialized calculator for part-time workers',
        'Plan 1 Student Loan Calculator - Dedicated Plan 1 calculator',
        'Plan 4 Student Loan Calculator - New Plan 4 support for Scottish students',
        'Regional National Comparison Calculator - Compare loan impacts across UK nations',
        'Repayment Start Date Calculator - Calculate when repayments begin',
        'Salary Growth Impact Calculator - Project future salary growth effects',
        'Self Employed Loan Calculator - Specialized for self-employed graduates',
        'SLC Interest Rate Impact Calculator - Track Student Loans Company rate changes',
        'Student Finance Calculator - Comprehensive student finance planning',
        'Student Loan Income Comparison - Enhanced income comparison tool',
        'Student Loan Interest Calculator - Detailed interest calculations',
        'Student Loan Overpayment Calculator - Advanced overpayment strategies',
        'Total Loan Cost Calculator - Complete lifetime cost analysis',

        // HMRC Calculator Suite
        'Bonus Month PAYE Calculator - Calculate tax on bonus payments',
        'CIS Self Employed Calculator - Construction Industry Scheme calculations',
        'Multiple Jobs PAYE Split Calculator - Handle multiple employment tax',
        'P60-P45 Student Loan Reconciliation Calculator - Reconcile tax documents',
        'PAYE Period Threshold Calculator - Calculate period-specific thresholds',
        'SA Unearned Income Calculator - Self-assessment unearned income',
        'Self Assessment Balancing Payment Calculator - Calculate balancing payments',
        'SL Split Tax Code Impact Calculator - Split tax codes for student loans',
        'SLC vs SA Calculator - Compare SLC vs Self Assessment routes',
        'Umbrella IR35 PAYE Calculator - IR35 umbrella company calculations',

        // NEW Advanced Calculators
        'Bonus Variable Pay Impact Calculator - Variable pay impact on loans',
        'Combined UG Repayment Calculator - Undergraduate combined repayments',
        'Multiple Jobs Side Income Calculator - Side income loan calculations',
        'Part Year Employment Career Break Calculator - Career break impacts',
        'PAYE vs Self Assessment Repayment Calculator - Compare repayment methods',
        'Pension Salary Sacrifice Effect Calculator - Pension sacrifice impacts',
        'Plan Cohort Finder - Find your specific plan cohort',
        'Tax Year Threshold Interest Browser - Browse historical thresholds',

        // NEW Comprehensive Guides
        'Bonus Payments Student Loans UK Guide - How bonuses affect repayments',
        'Career Progression Student Loans Marginal Tax Guide - Career progression impacts',
        'Contractors Student Loans IR35 Umbrella CIS Guide - Contractor-specific guidance',
        'Crossing Student Loan Thresholds UK Guide - Threshold crossing strategies',
        'How Student Loans Work UK Guide - Updated comprehensive guide',
        'Investing vs Loan Repayment Guide - Enhanced investment strategies',
        'Investment Income Dividends Student Loans UK Guide - Investment income impacts',
        'Loan Interest Explained Guide - Detailed interest explanations',
        'Maternity Pay Student Loans UK Guide - Maternity leave considerations',
        'Moving Abroad UK Student Loans Guide - International repayment guide',
        'Multiple Jobs Student Loans UK Guide - Multiple employment guidance',
        'P60-P45 Student Loan Repayments Guide - Tax document guidance',
        'Part Time Work Student Loans UK Guide - Part-time work considerations',
        'PAYE vs Self Assessment Student Loans Guide - Payment method comparison',
        'Pension vs Student Loan Overpayments UK Guide - Pension vs loan strategies',
        'Plan 2 Student Loans UK Strategy Guide - Plan 2 specific strategies',
        'Plan 5 Student Loans UK Optimization Guide - Plan 5 optimization',
        'Postgraduate Loans UK Strategy Guide - Postgraduate loan strategies',
        'Repayment Thresholds Guide - Threshold management strategies',
        'Salary Sacrifice Student Loans UK Guide - Salary sacrifice impacts',
        'Self Employment Student Loans UK Guide - Self-employment considerations',
        'Should I Overpay Loan Guide - Enhanced overpayment decisions',
        'Side Hustles Student Loans UK Guide - Side income guidance',
        'Student Loan Interest Rates Guide - Interest rate explanations',
        'Student Loan Tax Code Payslip UK Guide - Payslip understanding',
        'Student Loan Tax Codes Guide - Tax code explanations',
        'Student Loans and Mortgages Guide - Updated mortgage guidance',
        'Student Loans and Taxes Guide - Tax interaction guide',
        'Student Loans High Earners Guide - High earner strategies',
        'Student Loans Low Income Guide - Low income support',

        // Enhanced Platform Features
        'Hero Section Calculator Display - Prominent calculator showcase',
        'Advanced Calculator Organization - Improved navigation and categorization',
        'HMRC Integration Suite - Complete HMRC calculator integration',
        'Multi-Plan Support - Support for all UK student loan plans',
        'Enhanced Mobile Experience - Improved mobile calculator interface',
        'Real-time Tax Integration - Live tax calculation integration',
        'Comprehensive Guide Library - Expanded educational content',
        'Advanced Scenario Planning - Multiple scenario calculations',
        'Professional Calculator Suite - Enterprise-grade calculation tools'
      ]
    },
    {
      version: '1.0.0',
      date: '2024-01-15',
      type: 'added',
      items: [
        // Calculators
        'Plan 5 Calculator - For students starting from 2023 in England & Wales',
        'Write-off Calculator - Find when your student loan will be written off',
        'Income Comparison Calculator - Compare take-home pay with different student loans',
        'Investment vs Overpayment Calculator - Optimal strategy for investing vs loan repayments',
        'Plan 2 Calculator - For students who started 2012-2023 in England & Wales',
        'Monthly Repayment Calculator - Compare monthly payments across all loan types',

        // Guides
        'Plan 2 vs Plan 5 Guide - Key differences between loan plans',
        'Student Loans and Mortgages Guide - Impact on mortgage applications',
        'Investing vs Loan Repayment Guide - Financial decision framework',
        'How UK Student Loans Work Guide - Complete system overview',
        'Overpayment Strategy Guide - When and how to make voluntary payments',

        // Comparison Tools
        'Plan 2 vs Plan 5 Detailed Comparison - Side-by-side analysis',
        'Plan 5 vs Postgraduate Loans Comparison - Undergraduate vs postgraduate',
        'Loans on £50k Salary Analysis - High-earner specific breakdown',

        // Loan Plans Support
        'Plan 1 Support - Pre-2012 students (£22,015 threshold, 9% rate, 25yr write-off)',
        'Plan 2 Support - 2012-2023 England & Wales (£27,295 threshold, 9% rate, 30yr write-off)',
        'Plan 5 Support - 2023+ England & Wales (£25,000 threshold, 9% rate, 40yr write-off)',
        'Postgraduate Loans Support - Masters/PhD (£21,000 threshold, 6% rate, 30yr write-off)',
        'Scottish Student Loans Support - Scotland-specific calculations',

        // Technical Features
        'No registration required access',
        'Completely free platform',
        'Mobile-responsive design',
        '2025 UK regulation compliance',
        'Real-time calculation updates',
        'Cross-browser compatibility',
        'Data integration with Student Finance England',
        'Data integration with Student Loans Company (SLC)',
        'Data integration with HMRC tax rates',

        // Expert Content
        'Student Finance Expert insights and strategies',
        'Financial Advisor guidance for graduates',
        'Data Analyst trends and repayment patterns',
        'User testimonials and trust indicators',
        'Accuracy validation processes'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'added': return 'bg-green-100 text-green-800 border-green-200';
      case 'changed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'deprecated': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'removed': return 'bg-red-100 text-red-800 border-red-200';
      case 'fixed': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'security': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'added': return <CheckCircle className="w-4 h-4" />;
      case 'changed': return <ArrowRight className="w-4 h-4" />;
      case 'deprecated': return <Calendar className="w-4 h-4" />;
      case 'removed': return <FileText className="w-4 h-4" />;
      case 'fixed': return <GitCommit className="w-4 h-4" />;
      case 'security': return <Users className="w-4 h-4" />;
      default: return <GitCommit className="w-4 h-4" />;
    }
  };

  const categorizeItems = (items: string[]) => {
    const categories = {
      calculators: items.filter(item =>
        item.includes('Calculator') &&
        !item.includes('HMRC') &&
        !item.includes('PAYE') &&
        !item.includes('CIS') &&
        !item.includes('IR35') &&
        !item.includes('SA ') &&
        !item.includes('Umbrella')
      ),
      hmrcSuite: items.filter(item =>
        item.includes('PAYE') ||
        item.includes('CIS') ||
        item.includes('IR35') ||
        item.includes('SA ') ||
        item.includes('Umbrella') ||
        item.includes('P60-P45') ||
        item.includes('Tax Code') ||
        item.includes('Self Assessment')
      ),
      guides: items.filter(item => item.includes('Guide')),
      comparisons: items.filter(item => item.includes('Comparison') || item.includes('Analysis')),
      plans: items.filter(item => item.includes('Support') && (item.includes('Plan') || item.includes('Loans'))),
      technical: items.filter(item =>
        item.includes('registration') ||
        item.includes('free') ||
        item.includes('responsive') ||
        item.includes('compliance') ||
        item.includes('updates') ||
        item.includes('compatibility') ||
        item.includes('integration') ||
        item.includes('Hero Section') ||
        item.includes('Platform Features') ||
        item.includes('Experience') ||
        item.includes('Suite')
      ),
      expert: items.filter(item =>
        item.includes('Expert') ||
        item.includes('Advisor') ||
        item.includes('Analyst') ||
        item.includes('testimonials') ||
        item.includes('validation')
      )
    };

    return categories;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <GitCommit className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">Student Loan Calculator Changelog</h1>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Version Navigation */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Versions</h2>
          <div className="flex space-x-2">
            {changelog.map((entry) => (
              <button
                key={entry.version}
                onClick={() => setSelectedVersion(entry.version)}
                className={`px-4 py-2 rounded-lg border transition-colors ${selectedVersion === entry.version
                    ? 'bg-blue-50 border-blue-200 text-blue-800'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
              >
                v{entry.version}
              </button>
            ))}
            <button
              className="px-4 py-2 rounded-lg border border-dashed border-gray-300 text-gray-500 hover:border-gray-400"
              disabled
            >
              v3.0.0 (Coming Soon)
            </button>
          </div>
        </div>

        {/* Changelog Content */}
        {changelog
          .filter(entry => entry.version === selectedVersion)
          .map((entry) => {
            const categories = categorizeItems(entry.items);

            return (
              <div key={entry.version} className="bg-white rounded-lg shadow-sm border">
                {/* Version Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        Version {entry.version} - {entry.version === '2.0.0' ? 'Enhanced Calculator Platform' : 'Initial Release'}
                      </h3>
                      {/* <p className="text-gray-600 mt-1">
                        Platform: {entry.version === '2.0.0' ? 'https://studentloancalculator.uk' : 'studentloancalculator.uk'}
                      </p> */}
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(entry.type)}`}>
                        {getTypeIcon(entry.type)}
                        <span className="ml-1 capitalize">{entry.type}</span>
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{entry.date}</p>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-6 space-y-8">
                  {/* HMRC Calculator Suite */}
                  {categories.hmrcSuite.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <PoundSterling className="w-5 h-5 text-red-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          HMRC Calculator Suite ({categories.hmrcSuite.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categories.hmrcSuite.map((item, index) => (
                          <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                            <p className="text-sm text-red-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Calculators */}
                  {categories.calculators.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <Calculator className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Calculators ({categories.calculators.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categories.calculators.map((item, index) => (
                          <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                            <p className="text-sm text-blue-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Guides */}
                  {categories.guides.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 text-green-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Educational Guides ({categories.guides.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categories.guides.map((item, index) => (
                          <div key={index} className="p-3 bg-green-50 rounded-lg border border-green-100">
                            <p className="text-sm text-green-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Comparison Tools */}
                  {categories.comparisons.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Comparison Tools ({categories.comparisons.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categories.comparisons.map((item, index) => (
                          <div key={index} className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                            <p className="text-sm text-purple-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Loan Plans */}
                  {categories.plans.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-5 h-5 text-orange-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Supported Loan Plans ({categories.plans.length})
                        </h4>
                      </div>
                      <div className="space-y-3">
                        {categories.plans.map((item, index) => (
                          <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                            <p className="text-sm text-orange-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technical Features */}
                  {categories.technical.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <FileText className="w-5 h-5 text-gray-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Technical Features ({categories.technical.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {categories.technical.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <p className="text-sm text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expert Content */}
                  {categories.expert.length > 0 && (
                    <div>
                      <div className="flex items-center mb-4">
                        <Users className="w-5 h-5 text-indigo-600 mr-2" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          Expert Content & Trust ({categories.expert.length})
                        </h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {categories.expert.map((item, index) => (
                          <div key={index} className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                            <p className="text-sm text-indigo-900">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Summary Stats */}
                <div className="p-6 bg-gray-50 border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-7 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{categories.calculators.length}</p>
                      <p className="text-sm text-gray-600">Calculators</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-red-600">{categories.hmrcSuite.length}</p>
                      <p className="text-sm text-gray-600">HMRC Suite</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{categories.guides.length}</p>
                      <p className="text-sm text-gray-600">Guides</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{categories.comparisons.length}</p>
                      <p className="text-sm text-gray-600">Comparisons</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-600">{categories.plans.length}</p>
                      <p className="text-sm text-gray-600">Loan Plans</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-600">{categories.technical.length}</p>
                      <p className="text-sm text-gray-600">Tech Features</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">{categories.expert.length}</p>
                      <p className="text-sm text-gray-600">Expert Content</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* Coming Soon Section */}
        <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-dashed border-blue-200 p-6 text-center">
          <GitCommit className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">More Coming Soon</h3>
          <p className="text-gray-600 mb-4">
            We&apos;re working on adding more calculators, comprehensive guides, and helpful resources
          </p>
          <p className="text-sm text-gray-500 mb-3">
            Have a calculator suggestion or feedback? We&apos;d love to hear from you!
          </p>
          <a
            href="/contact/"
            className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            Contact us with your recommendations →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChangelogComponent;