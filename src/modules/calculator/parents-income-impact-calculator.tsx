"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useMemo, useState } from "react";

type Region = "England" | "Scotland" | "Wales" | "Northern Ireland";
type LivingSituation = "at-home" | "away-london" | "away-other";
type StudentStatus = "dependent" | "independent";

type LoanBreakdown = {
  maxLoan: number;
  actualLoan: number;
  minimumLoan: number;
  reduction: number;
  reductionPercentage: number;
  expectedParentalContribution: number;
  incomeThreshold: {
    min: number;
    max: number;
  };
};

// 2025/26 Maintenance Loan Data
const ENGLAND_LOANS = {
  "at-home": {
    max: 8877,
    min: 3907,
    maxIncomeThreshold: 58349,
    bands: [
      { income: 25000, amount: 8877 },
      { income: 30000, amount: 8132 },
      { income: 35000, amount: 7387 },
      { income: 40000, amount: 6642 },
      { income: 42875, amount: 6214 },
      { income: 45000, amount: 5897 },
      { income: 50000, amount: 5152 },
      { income: 55000, amount: 4407 },
      { income: 58349, amount: 3907 },
    ],
  },
  "away-other": {
    max: 10544,
    min: 4915,
    maxIncomeThreshold: 62377,
    bands: [
      { income: 25000, amount: 10544 },
      { income: 30000, amount: 9791 },
      { income: 35000, amount: 9038 },
      { income: 40000, amount: 8285 },
      { income: 42875, amount: 7852 },
      { income: 45000, amount: 7532 },
      { income: 50000, amount: 6779 },
      { income: 55000, amount: 6026 },
      { income: 58349, amount: 5522 },
      { income: 60000, amount: 5273 },
      { income: 62377, amount: 4915 },
    ],
  },
  "away-london": {
    max: 13762,
    min: 6853,
    maxIncomeThreshold: 70116,
    bands: [
      { income: 25000, amount: 13762 },
      { income: 30000, amount: 12997 },
      { income: 35000, amount: 12231 },
      { income: 40000, amount: 11465 },
      { income: 42875, amount: 11025 },
      { income: 45000, amount: 10700 },
      { income: 50000, amount: 9934 },
      { income: 55000, amount: 9168 },
      { income: 58349, amount: 8655 },
      { income: 60000, amount: 8403 },
      { income: 62377, amount: 8039 },
      { income: 65000, amount: 7637 },
      { income: 70000, amount: 6871 },
      { income: 70116, amount: 6853 },
    ],
  },
};

const SCOTLAND_LOANS = {
  "at-home": { max: 7750, min: 5100 },
  "away-other": { max: 8000, min: 5100 },
  "away-london": { max: 9500, min: 5100 },
};

const WALES_LOANS = {
  "at-home": { max: 11830, min: 3907, grant: 1000 },
  "away-other": { max: 13475, min: 4915, grant: 1000 },
  "away-london": { max: 15415, min: 6853, grant: 1000 },
};

const NI_LOANS = {
  "at-home": { max: 5250, min: 3750, grant: 3475 },
  "away-other": { max: 6780, min: 4840, grant: 3475 },
  "away-london": { max: 9488, min: 6775, grant: 3475 },
};

const fmtMoney = (n: number, dp = 0) =>
  `£${(Math.round(n * 10 ** dp) / 10 ** dp).toLocaleString(undefined, {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  })}`;

function calculateEnglandLoan(
  householdIncome: number,
  livingSituation: LivingSituation
): LoanBreakdown {
  const config = ENGLAND_LOANS[livingSituation];
  const bands = config.bands;

  let actualLoan = config.min;

  if (householdIncome <= 25000) {
    actualLoan = config.max;
  } else if (householdIncome >= config.maxIncomeThreshold) {
    actualLoan = config.min;
  } else {
    // Linear interpolation between bands
    for (let i = 0; i < bands.length - 1; i++) {
      if (
        householdIncome >= bands[i].income &&
        householdIncome < bands[i + 1].income
      ) {
        const lowerBand = bands[i];
        const upperBand = bands[i + 1];
        const incomeRange = upperBand.income - lowerBand.income;
        const amountRange = lowerBand.amount - upperBand.amount;
        const incomeAboveLower = householdIncome - lowerBand.income;
        const reduction = (incomeAboveLower / incomeRange) * amountRange;
        actualLoan = lowerBand.amount - reduction;
        break;
      }
    }
  }

  const reduction = config.max - actualLoan;
  const expectedParentalContribution = Math.max(0, reduction);

  return {
    maxLoan: config.max,
    actualLoan: Math.round(actualLoan),
    minimumLoan: config.min,
    reduction: Math.round(reduction),
    reductionPercentage: (reduction / config.max) * 100,
    expectedParentalContribution: Math.round(expectedParentalContribution),
    incomeThreshold: {
      min: 25000,
      max: config.maxIncomeThreshold,
    },
  };
}

function calculateOtherRegionLoan(
  householdIncome: number,
  livingSituation: LivingSituation,
  region: Region
): LoanBreakdown {
  let config;
  let hasGrant = false;
  let grantAmount = 0;

  if (region === "Scotland") {
    config = SCOTLAND_LOANS[livingSituation];
  } else if (region === "Wales") {
    config = WALES_LOANS[livingSituation];
    hasGrant = true;
    grantAmount = config.grant;
  } else {
    config = NI_LOANS[livingSituation];
    hasGrant = true;
    grantAmount = config.grant;
  }

  // Simplified calculation for other regions (linear reduction)
  let actualLoan = config.max;

  if (householdIncome <= 25000) {
    actualLoan = config.max;
  } else if (householdIncome >= 60000) {
    actualLoan = config.min;
  } else {
    // Linear reduction between £25k and £60k
    const reductionRate = (householdIncome - 25000) / 35000;
    actualLoan = config.max - (config.max - config.min) * reductionRate;
  }

  const reduction = config.max - actualLoan;
  const expectedParentalContribution = Math.max(0, reduction);

  return {
    maxLoan: config.max + (hasGrant ? grantAmount : 0),
    actualLoan: Math.round(actualLoan) + (hasGrant ? grantAmount : 0),
    minimumLoan: config.min + (hasGrant ? grantAmount : 0),
    reduction: Math.round(reduction),
    reductionPercentage: (reduction / config.max) * 100,
    expectedParentalContribution: Math.round(expectedParentalContribution),
    incomeThreshold: {
      min: 25000,
      max: 60000,
    },
  };
}

export default function ParentalIncomeCalculatorPage() {
  const [region, setRegion] = useState<Region>("England");
  const [householdIncome, setHouseholdIncome] = useState(40000);
  const [livingSituation, setLivingSituation] =
    useState<LivingSituation>("away-other");
  const [studentStatus, setStudentStatus] = useState<StudentStatus>("dependent");
  const [age, setAge] = useState(20);

  // Determine if student qualifies as independent
  const isIndependent = useMemo(() => {
    return studentStatus === "independent" || age >= 25;
  }, [studentStatus, age]);

  const loanBreakdown = useMemo(() => {
    if (isIndependent) {
      // Independent students get maximum loan regardless of parental income
      if (region === "England") {
        const config = ENGLAND_LOANS[livingSituation];
        return {
          maxLoan: config.max,
          actualLoan: config.max,
          minimumLoan: config.min,
          reduction: 0,
          reductionPercentage: 0,
          expectedParentalContribution: 0,
          incomeThreshold: { min: 0, max: 0 },
        };
      } else {
        return calculateOtherRegionLoan(0, livingSituation, region);
      }
    }

    if (region === "England") {
      return calculateEnglandLoan(householdIncome, livingSituation);
    } else {
      return calculateOtherRegionLoan(householdIncome, livingSituation, region);
    }
  }, [region, householdIncome, livingSituation, isIndependent]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
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
              <li><span className="font-medium text-gray-800" aria-current="page">Parents&apos; Income Impact Calculator</span></li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Parents&apos; Income Impact Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Understand how household income affects student maintenance loan amounts and discover
            the expected parental contribution for university students.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-start">
                <div className="text-amber-600 mr-3 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">Important Notice</h3>
                  <p className="text-sm text-gray-600">
                    Maintenance loans are means-tested based on household income. The gap between
                    maximum and actual loan is the expected parental contribution.
                  </p>
                </div>
              </div>
            </div>

            {/* Region */}
            <div>
              <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                Study Region
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value as Region)}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              >
                <option value="England">England</option>
                <option value="Scotland">Scotland</option>
                <option value="Wales">Wales</option>
                <option value="Northern Ireland">Northern Ireland</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Student Age at Course Start
              </label>
              <input
                type="number"
                id="age"
                min={16}
                max={60}
                value={age}
                onChange={(e) => setAge(Number(e.target.value || 18))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
              />
              {age >= 25 && (
                <p className="mt-1 text-sm text-green-600 font-medium">
                  ✓ Automatically qualifies as independent student
                </p>
              )}
            </div>

            {/* Student Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student Status
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="dependent"
                    checked={studentStatus === "dependent" && age < 25}
                    onChange={(e) => setStudentStatus(e.target.value as StudentStatus)}
                    disabled={age >= 25}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Dependent (parental income assessed)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value="independent"
                    checked={studentStatus === "independent" || age >= 25}
                    onChange={(e) => setStudentStatus(e.target.value as StudentStatus)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Independent (no parental income)
                  </span>
                </label>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Independent if: age 25+, self-supporting 3 years, married, care leaver, or
                estranged
              </p>
            </div>

            {/* Living Situation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Living Situation
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="living"
                    value="at-home"
                    checked={livingSituation === "at-home"}
                    onChange={(e) => setLivingSituation(e.target.value as LivingSituation)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Living with parents</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="living"
                    value="away-other"
                    checked={livingSituation === "away-other"}
                    onChange={(e) => setLivingSituation(e.target.value as LivingSituation)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Away from home (outside London)
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="living"
                    value="away-london"
                    checked={livingSituation === "away-london"}
                    onChange={(e) => setLivingSituation(e.target.value as LivingSituation)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Away from home (London)</span>
                </label>
              </div>
            </div>

            {/* Household Income */}
            {!isIndependent && (
              <div>
                <label
                  htmlFor="household-income"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Annual Household Income
                </label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">£</span>
                  <input
                    type="number"
                    id="household-income"
                    min={0}
                    max={150000}
                    step={1000}
                    value={householdIncome}
                    onChange={(e) => setHouseholdIncome(Number(e.target.value || 0))}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                  />
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    id="income-slider"
                    min={0}
                    max={100000}
                    step={1000}
                    value={Math.min(100000, householdIncome)}
                    onChange={(e) => setHouseholdIncome(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Based on 2023/24 tax year for 2025/26 academic year
                </p>
              </div>
            )}
          </div>

          {/* Results */}
          <div className="lg:col-span-2" role="region" aria-live="polite">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Your Maintenance Loan Estimate
            </h2>

            {isIndependent ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <div className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Independent Student Status
                    </h3>
                    <p className="text-sm text-gray-700">
                      As an independent student, parental income is not assessed. You qualify for
                      the maximum maintenance loan available for your living situation.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-200">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  Maximum Possible Loan
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-1">
                  {fmtMoney(loanBreakdown.maxLoan, 0)}
                </p>
                <p className="text-sm text-gray-600">per year (includes grants if applicable)</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  Your Estimated Loan
                </p>
                <p className="text-4xl font-bold text-gray-800 mb-1">
                  {fmtMoney(loanBreakdown.actualLoan, 0)}
                </p>
                <p className="text-sm text-gray-600">based on household income</p>
              </div>
            </div>

            {!isIndependent && loanBreakdown.reduction > 0 && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Parental Contribution Expected
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Loan Reduction</p>
                    <p className="text-2xl font-bold text-red-700">
                      {fmtMoney(loanBreakdown.reduction, 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      ({loanBreakdown.reductionPercentage.toFixed(1)}% reduction)
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Expected Annual Contribution</p>
                    <p className="text-2xl font-bold text-red-700">
                      {fmtMoney(loanBreakdown.expectedParentalContribution, 0)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {fmtMoney(loanBreakdown.expectedParentalContribution / 12, 0)}/month
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Important:</strong> While not legally required, the government expects
                    parents to make up the difference between the maximum and actual loan amount.
                    This is not always made explicit in loan letters.
                  </p>
                </div>
              </div>
            )}

            {!isIndependent && loanBreakdown.reduction === 0 && householdIncome <= 25000 && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Maximum Loan Entitlement
                </h3>
                <p className="text-sm text-gray-700">
                  With a household income of {fmtMoney(householdIncome, 0)} or less, the student
                  qualifies for the maximum maintenance loan available with no expected parental
                  contribution.
                </p>
              </div>
            )}

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Region</span>
                  <span className="text-sm font-medium text-gray-800">{region}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Living Situation</span>
                  <span className="text-sm font-medium text-gray-800">
                    {livingSituation === "at-home"
                      ? "With parents"
                      : livingSituation === "away-london"
                        ? "London"
                        : "Outside London"}
                  </span>
                </div>
                {!isIndependent && (
                  <>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Household Income</span>
                      <span className="text-sm font-medium text-gray-800">
                        {fmtMoney(householdIncome, 0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Income Assessment Range</span>
                      <span className="text-sm font-medium text-gray-800">
                        {fmtMoney(loanBreakdown.incomeThreshold.min, 0)} -{" "}
                        {fmtMoney(loanBreakdown.incomeThreshold.max, 0)}
                      </span>
                    </div>
                  </>
                )}
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Minimum Loan (non-means tested)</span>
                  <span className="text-sm font-medium text-gray-800">
                    {fmtMoney(loanBreakdown.minimumLoan, 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Student Status</span>
                  <span className="text-sm font-medium text-gray-800">
                    {isIndependent ? "Independent" : "Dependent"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Bands Table */}
      {region === "England" && !isIndependent && (
        <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            England Maintenance Loan by Income (2025/26)
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Household Income
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Living at Home
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Away (Outside London)
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Away (London)
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">£25,000 or less</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">£8,877</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">£10,544</td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">£13,762</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">£30,000</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£8,132</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£9,791</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£12,997</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">£40,000</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£6,642</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£8,285</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£11,465</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">£50,000</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£5,152</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£6,779</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£9,934</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">£58,349+</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£3,907</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£4,915</td>
                  <td className="px-4 py-3 text-sm text-gray-900">£6,853+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Source: Student Finance England 2025/26. Amounts shown are annual loan values.
          </p>
        </section>
      )}

      {/* Related */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Calculators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/regional-student-loan-calculator/"
          >
            <div className="mr-3 text-purple-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Regional Comparison</h3>
              <p className="text-sm text-gray-600">Compare loan repayments across UK regions</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/plan-2-student-loan-calculator/"
          >
            <div className="mr-3 text-purple-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Repayment Calculator</h3>
              <p className="text-sm text-gray-600">Calculate your loan repayments</p>
            </div>
          </Link>

          <Link
            className="bg-white hover:bg-gray-50 rounded-lg shadow-sm p-4 flex items-start transition-colors"
            href="/calculators/student-loan-overpayment-calculator/"
          >
            <div className="mr-3 text-purple-700">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Overpayment Calculator</h3>
              <p className="text-sm text-gray-600">See savings from extra payments</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Explainer */}
      <section className="max-w-6xl mx-auto prose prose-purple">
        <h2>How Parental Income Affects Student Maintenance Loans</h2>
        <p>
          Student maintenance loans in the UK are means-tested based on household income for
          dependent students. This calculator helps families understand how much loan funding a
          student will receive and the expected parental contribution to fill any gap.
        </p>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="household-income">
            <AccordionTrigger>What is Household Income?</AccordionTrigger>
            <AccordionContent>
              <p>
                For the 2025/26 academic year, household income is based on the 2023/24 tax year (6 April
                2023 to 5 April 2024). For dependent students under 25, this includes parents&apos; combined
                income or one parent and their partner&apos;s income. Independent students are assessed only on
                their own income (and partner&apos;s if applicable).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="independent-status">
            <AccordionTrigger>Independent Student Status</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>Students qualify as independent and are not assessed on parental income if they:</p>
                <ul>
                  <li>Are 25 or older at the start of their course</li>
                  <li>Have been self-supporting for 36 months before the course starts</li>
                  <li>Are married or in a civil partnership</li>
                  <li>Have dependent children</li>
                  <li>Are care leavers (spent 13+ weeks in local authority care)</li>
                  <li>Are estranged from parents (no contact for over 12 months)</li>
                  <li>Have no living parents</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="parental-contribution">
            <AccordionTrigger>The Hidden Parental Contribution</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  While the government reduces maintenance loans based on household income, this creates an
                  implicit expectation that parents will make up the difference. This is rarely made
                  explicit in loan offer letters, causing confusion for many families.
                </p>

                <h4 className="font-semibold text-gray-800">England Example</h4>
                <p>
                  A student living away from home outside London with household income of £50,000 would
                  receive £6,779 in maintenance loan. However, the maximum available is £10,544. The
                  difference of £3,765 per year (£314/month) is the expected parental contribution that the
                  system assumes parents will provide.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="regional-differences">
            <AccordionTrigger>Regional Differences</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">England</h4>
                <p>
                  English students have the most detailed income assessment system with specific thresholds.
                  Maximum loans are paid to households earning £25,000 or less. The loan gradually reduces
                  as income increases, with minimum loans paid at £58,349+ (living at home) or £62,377+
                  (away from home outside London).
                </p>

                <h4 className="font-semibold text-gray-800">Scotland</h4>
                <p>
                  Scottish students can receive up to £7,750 (at home) or £8,000 (away from home outside
                  London). The minimum loan is £5,100 regardless of living situation. Scotland also offers
                  additional bursaries and grants not included in this calculator.
                </p>

                <h4 className="font-semibold text-gray-800">Wales</h4>
                <p>
                  Welsh students receive a combination of loan and grant support. Maximum support is
                  £11,830-£15,415 depending on living situation, with £1,000 coming as a non-repayable
                  grant. Welsh students also benefit from additional learning grants.
                </p>

                <h4 className="font-semibold text-gray-800">Northern Ireland</h4>
                <p>
                  Northern Irish students can access maintenance loans of £5,250-£9,488 depending on living
                  situation, plus maintenance grants of up to £3,475 for lower-income households. Tuition
                  fees are also significantly lower at £4,855 per year.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="current-year-assessment">
            <AccordionTrigger>Current Year Income Assessment</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <p>
                  If household income has dropped significantly since the 2023/24 tax year, students can
                  apply for a Current Year Income Assessment. Requirements vary by region:
                </p>
                <ul>
                  <li>England: 15% drop required</li>
                  <li>Northern Ireland: 5% drop required</li>
                  <li>Scotland: Must drop into a different income bracket</li>
                  <li>Wales: 15% drop required</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="what-counts">
            <AccordionTrigger>What Counts as Income?</AccordionTrigger>
            <AccordionContent>
              <p>
                Household income includes taxable income such as employment earnings, self-employment
                profits, pensions, rental income, and investment returns. Student employment income during
                university does not count, but unearned income (dividends, interest, rent) does.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Need help understanding student finance?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Student Finance England, Scotland, Wales, and Northern Ireland provide detailed guidance
          and calculators. Contact them directly if your circumstances are complex.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            href="/calculators/regional-student-loan-calculator/"
          >
            Compare Regional Repayments
          </Link>
          <a
            className="bg-white hover:bg-gray-50 text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 border-2 border-purple-600"
            href="https://www.gov.uk/student-finance-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Calculator
          </a>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="max-w-6xl mx-auto">
        <ol className="flex items-center space-x-1 text-sm text-gray-600">
          <li>
            <Link className="hover:text-purple-700 hover:underline" href="/">
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
            <Link className="hover:text-purple-700 hover:underline" href="/calculators/">
              Calculators
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
              Parents&apos; Income Impact Calculator
            </span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
