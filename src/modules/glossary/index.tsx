'use client';

import { useState, useEffect } from 'react';

interface Term {
    title: string;
    acronym?: string;
    definition: string;
    example?: string;
    tags: string[];
    plans: string[];
}

interface GlossarySection {
    terms: Term[];
}

export default function StudentLoanGlossary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activePlanFilter, setActivePlanFilter] = useState('all');
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const planFilters = [
        { value: 'all', label: 'All Terms' },
        { value: 'plan-1', label: 'Plan 1' },
        { value: 'plan-2', label: 'Plan 2' },
        { value: 'plan-4', label: 'Plan 4' },
        { value: 'plan-5', label: 'Plan 5' },
        { value: 'postgraduate', label: 'Postgraduate' },
    ];

    const glossaryData: GlossarySection[] = [
        {
            terms: [
                {
                    title: 'Annual Repayment Threshold',
                    definition: 'The minimum annual income level above which student loan repayments begin. This threshold varies by loan plan and is updated annually in line with inflation or government policy.',
                    example: 'For Plan 2 loans, the 2025/26 threshold is £27,295. If you earn £30,000 annually, you only repay on the £2,705 above the threshold.',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'APR',
                    acronym: '(Annual Percentage Rate)',
                    definition: 'The yearly interest rate applied to your student loan balance. For UK student loans, this is typically linked to RPI inflation plus a percentage margin that varies by plan and income.',
                    tags: ['Interest'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Balance',
                    acronym: '(Loan Balance)',
                    definition: 'The total amount you owe on your student loan, including the original borrowed amount plus accumulated interest, minus any repayments made.',
                    example: 'If you borrowed £45,000 for tuition and maintenance, and £8,000 interest has accrued while £5,000 in repayments have been made, your current balance is £48,000.',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Balancing Payment',
                    definition: 'An additional payment made through Self Assessment if your PAYE deductions during the tax year were insufficient to cover your full student loan repayment obligation.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Bonus Payment',
                    definition: 'A one-time payment from your employer in addition to regular salary. Student loan repayments are calculated on your total income including bonuses, which may push you into a higher repayment bracket temporarily.',
                    example: 'A £10,000 bonus on a Plan 2 loan would result in an additional £900 student loan deduction (9% of the bonus amount).',
                    tags: ['Income'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'CIS',
                    acronym: '(Construction Industry Scheme)',
                    definition: 'A tax deduction scheme for contractors in the construction industry. Student loan repayments are deducted at source alongside CIS deductions.',
                    tags: ['Self-Employment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Combined Repayment',
                    definition: 'When you have multiple student loans (e.g., undergraduate Plan 2 and Postgraduate Loan), you make separate repayments on each based on their respective thresholds and rates.',
                    example: 'With a £35,000 salary, you might repay 9% on income above £27,295 for Plan 2, plus 6% on income above £21,000 for a Postgraduate Loan, totaling approximately £1,533 annually.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Compound Interest',
                    definition: 'Interest charged on both your original loan amount and on previously accumulated interest. UK student loans use compound interest calculated daily.',
                    tags: ['Interest'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Deferment',
                    definition: 'A temporary pause in student loan repayments when your income falls below the repayment threshold or you\'re studying, unemployed, or on parental leave. Interest continues to accrue during deferment.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Direct Debit',
                    definition: 'A payment method used for voluntary overpayments to the Student Loans Company. Standard repayments through employment are automatically deducted via PAYE, not Direct Debit.',
                    tags: ['Repayment'],
                    plans: [],
                },
                {
                    title: 'Dividends',
                    definition: 'Income from shareholdings that counts toward your total income for student loan repayment calculations when filing Self Assessment, but is not subject to PAYE deductions.',
                    tags: ['Income'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Early Repayment',
                    definition: 'Making voluntary payments above your automatic deductions to pay off your student loan faster. Consider whether this is financially beneficial given write-off dates and interest rates.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Employed Income',
                    definition: 'Income from employment (salary, wages, bonuses) that is subject to PAYE deductions, including automatic student loan repayments.',
                    tags: ['Income'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'First Repayment Date',
                    definition: 'Repayments begin in the April after you finish your course or leave university, provided your income exceeds the threshold for your plan type.',
                    example: 'If you graduate in June 2024, your first repayment would be due in April 2025 tax year.',
                    tags: ['Timeline'],
                    plans: [],
                },
                {
                    title: 'Full-Time Study',
                    definition: 'Students studying full-time do not make student loan repayments during their studies, regardless of any part-time work income. Interest accrues from the first payment.',
                    tags: ['Study'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Grace Period',
                    definition: 'The period between finishing your studies and when repayments begin. For UK student loans, this is until the April following graduation.',
                    tags: ['Timeline'],
                    plans: [],
                },
                {
                    title: 'Gross Income',
                    definition: 'Your total income before any deductions (tax, National Insurance, pension contributions). Student loan repayments are calculated on gross income minus certain allowable deductions.',
                    example: 'A gross salary of £32,000 with a £2,000 pension contribution means student loan repayments are calculated on £30,000.',
                    tags: ['Income'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Graduation Year',
                    definition: 'The year you complete your course, which determines when your write-off period begins counting and affects which repayment plan applies to you.',
                    tags: ['Timeline'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Higher Rate Interest',
                    definition: 'For Plan 2 loans, interest rates increase progressively as income rises from the threshold (£27,295) to £49,130. Above £49,130, maximum interest of RPI + 3% applies.',
                    tags: ['Interest'],
                    plans: ['plan-2'],
                },
                {
                    title: 'HMRC',
                    acronym: '(HM Revenue & Customs)',
                    definition: 'The UK tax authority responsible for collecting student loan repayments through PAYE and Self Assessment, then forwarding them to the Student Loans Company.',
                    tags: ['Organization'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Income-Contingent Repayment',
                    definition: 'The UK student loan system where repayments are based on your income level rather than your loan balance. You only repay when earning above the threshold, and amounts adjust with income changes.',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Inflation',
                    definition: 'The rate at which prices increase over time. Student loan interest rates and repayment thresholds are typically linked to inflation measures (RPI or CPI).',
                    tags: ['Economic'],
                    plans: [],
                },
                {
                    title: 'Interest-Free Period',
                    definition: 'Some student loan plans (Plan 1, Plan 4) charge interest equal to or close to inflation, effectively making the real interest rate zero or minimal.',
                    tags: ['Interest'],
                    plans: [],
                },
                {
                    title: 'Interest Rate',
                    definition: 'The percentage charged on your outstanding loan balance. Rates vary by plan: Plan 1/4 use RPI or BOE base rate +1% (whichever is lower), Plan 2/5 use RPI + 0-3% depending on income, Postgraduate Loan uses RPI + 3%.',
                    example: 'With a £40,000 balance and 5.5% interest rate, you\'d accrue approximately £2,200 in interest annually if not making repayments exceeding the interest charge.',
                    tags: ['Interest'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'IR35',
                    definition: 'Tax legislation affecting contractors working through intermediaries (personal service companies). If inside IR35, you\'re treated as an employee for tax purposes, including student loan deductions.',
                    tags: ['Self-Employment'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Loan Book',
                    definition: 'The collective term for all student loans held and managed by the Student Loans Company or the government.',
                    tags: ['Organization'],
                    plans: [],
                },
                {
                    title: 'Lump Sum Repayment',
                    definition: 'A one-time larger payment made to reduce or pay off your student loan balance. Can be made at any time without penalty.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Maintenance Loan',
                    definition: 'Money borrowed to cover living costs while studying (accommodation, food, bills, course materials). The amount depends on household income, location, and whether living at home.',
                    tags: ['Loan Type'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5'],
                },
                {
                    title: 'Marginal Tax Rate',
                    definition: 'The combined percentage of additional income paid in tax, National Insurance, and student loan repayments. Can reach 42-51% for higher earners with student loans.',
                    example: 'Earning £50,000 with a Plan 2 loan: 20% income tax + 12% NI + 9% student loan = 41% marginal rate on income between £27,295 and £50,270.',
                    tags: ['Tax'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Maternity/Paternity Leave',
                    definition: 'Periods of reduced income due to parental leave. Statutory maternity pay (approximately £184/week) is usually below the repayment threshold, automatically pausing repayments.',
                    tags: ['Life Events'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Monthly Threshold',
                    definition: 'The monthly equivalent of the annual repayment threshold, used by employers to calculate PAYE deductions. For Plan 2 (2025/26): £2,274 per month.',
                    example: 'Monthly salary of £2,500 minus threshold of £2,274 = £226 × 9% = £20.34 monthly repayment.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Multiple Jobs',
                    definition: 'When working multiple jobs simultaneously, each employer deducts student loan repayments separately based on your earnings with them, potentially causing overpayment if combined income is miscalculated.',
                    tags: ['Employment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'National Insurance',
                    acronym: '(NI)',
                    definition: 'A tax on earnings separate from income tax. Like student loan repayments, NI is deducted through PAYE and has its own threshold and rates.',
                    tags: ['Tax'],
                    plans: [],
                },
                {
                    title: 'Negative Amortization',
                    definition: 'When your repayments don\'t cover the interest accruing on your loan, causing your balance to grow despite making payments. Common for lower earners on Plan 2.',
                    example: 'Earning £30,000 on Plan 2, you repay ~£247/year but accrue ~£2,475 interest on a £45,000 balance, increasing debt by ~£2,228 annually.',
                    tags: ['Interest'],
                    plans: ['plan-2', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Overseas Repayment',
                    definition: 'If you move abroad, you must inform SLC and continue making repayments based on equivalent local thresholds. Failure to do so can result in penalties and interest charges.',
                    tags: ['International'],
                    plans: [],
                },
                {
                    title: 'Overpayment',
                    definition: 'Either: (1) Voluntary extra payments beyond automatic deductions to reduce your loan faster, or (2) Accidentally paying too much, which can be reclaimed from SLC.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'P45',
                    definition: 'A document from your employer when leaving a job, showing earnings and deductions to date (including student loan repayments). Given to your new employer to ensure correct tax/loan codes.',
                    tags: ['Tax Documents'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'P60',
                    definition: 'Annual summary from your employer showing total earnings and deductions (tax, NI, student loans) for the complete tax year. Essential for checking correct loan deductions.',
                    tags: ['Tax Documents'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Part-Time Study',
                    definition: 'Part-time students must make loan repayments while studying if earning above the threshold, unlike full-time students who are exempt during study.',
                    tags: ['Study'],
                    plans: [],
                },
                {
                    title: 'PAYE',
                    acronym: '(Pay As You Earn)',
                    definition: 'The system where employers automatically deduct income tax, National Insurance, and student loan repayments from your salary before you receive it.',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Pensionable Income',
                    definition: 'Income used to calculate pension contributions. Student loan repayments are calculated on salary after pension contributions (if salary sacrifice), reducing repayment amounts.',
                    tags: ['Income'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Plan 1',
                    definition: 'Student loan plan for students who started courses before September 2012 in England/Wales, or Scottish students. Threshold: £24,990 (2025/26), 9% repayment rate, RPI or BOE+1% interest (lower), 25-year write-off from first April after graduation.',
                    tags: ['Loan Plan'],
                    plans: ['plan-1'],
                },
                {
                    title: 'Plan 2',
                    definition: 'Most common plan for English/Welsh undergraduates who started 2012-2023. Threshold: £27,295 (2025/26), 9% repayment rate, RPI + 0-3% interest (income-linked), 30-40 year write-off depending on when you started.',
                    tags: ['Loan Plan'],
                    plans: ['plan-2'],
                },
                {
                    title: 'Plan 4',
                    definition: 'For Scottish students. Threshold: £31,395 (2025/26), 9% repayment rate, lower interest rates than Plan 2, 30-year write-off.',
                    tags: ['Loan Plan'],
                    plans: ['plan-4'],
                },
                {
                    title: 'Plan 5',
                    definition: 'Newest plan for English/Welsh students starting from August 2023 onwards. Threshold: £25,000, 9% repayment rate, RPI interest rate (no income-linked increase), 40-year write-off.',
                    tags: ['Loan Plan'],
                    plans: ['plan-5'],
                },
                {
                    title: 'Postgraduate Loan',
                    definition: 'Separate loan for Master\'s degrees (up to £12,167) or Doctorates (up to £28,673). Threshold: £21,000, 6% repayment rate, RPI + 3% interest, 30-year write-off. Repaid simultaneously with undergraduate loans.',
                    example: 'Earning £35,000 with Plan 2 + PGL: Pay 9% of £7,705 (above £27,295) for Plan 2 = £693, plus 6% of £14,000 (above £21,000) for PGL = £840. Total: £1,533/year.',
                    tags: ['Loan Plan'],
                    plans: ['postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Reconciliation',
                    definition: 'The process of checking your annual student loan deductions against what you actually owe, typically done through Self Assessment or by contacting HMRC/SLC.',
                    tags: ['Administration'],
                    plans: [],
                },
                {
                    title: 'Refund',
                    definition: 'Money returned if you\'ve overpaid student loans, either within the tax year (PAYE) or after annual reconciliation. Contact SLC to request refunds.',
                    tags: ['Repayment'],
                    plans: [],
                },
                {
                    title: 'Rental Income',
                    definition: 'Income from property rentals that must be declared via Self Assessment and counts toward total income for student loan calculations.',
                    tags: ['Income'],
                    plans: [],
                },
                {
                    title: 'Repayment Holiday',
                    definition: 'Informal term for periods when you don\'t make repayments because income is below threshold. No action needed - happens automatically.',
                    tags: ['Repayment'],
                    plans: [],
                },
                {
                    title: 'Repayment Rate',
                    definition: 'The percentage of income above the threshold that goes toward student loan repayments. Typically 9% for undergraduate loans, 6% for Postgraduate Loans.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Repayment Threshold',
                    definition: 'The income level below which you make no student loan repayments. Varies by plan type and is usually updated annually.',
                    example: '2025/26 thresholds: Plan 1 (£24,990), Plan 2 (£27,295), Plan 4 (£31,395), Plan 5 (£25,000), Postgraduate (£21,000).',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'RPI',
                    acronym: '(Retail Price Index)',
                    definition: 'A measure of inflation used as the base for most UK student loan interest rates. RPI tracks the change in prices of goods and services over time.',
                    tags: ['Economic'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Salary Sacrifice',
                    definition: 'Arrangement where you give up part of your salary in exchange for benefits (typically pension contributions). Reduces student loan repayments as they\'re calculated on post-sacrifice income.',
                    example: '£35,000 salary with £3,000 salary sacrifice pension means student loans calculated on £32,000, saving ~£270/year on Plan 2.',
                    tags: ['Strategy'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Self Assessment',
                    definition: 'Annual tax return required if you\'re self-employed, have income from multiple sources, or earn over £100,000. Student loan repayments on non-PAYE income calculated through this process.',
                    tags: ['Tax'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Self-Employed Income',
                    definition: 'Income from self-employment or business profits. Student loan repayments on this income are calculated annually through Self Assessment, not deducted monthly via PAYE.',
                    tags: ['Income'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Side Hustle',
                    definition: 'Additional income alongside main employment (freelancing, gig work, etc.). Must be declared via Self Assessment if over £1,000, and counts toward total income for student loan calculations.',
                    tags: ['Income'],
                    plans: [],
                },
                {
                    title: 'SLC',
                    acronym: '(Student Loans Company)',
                    definition: 'Government-owned organization that administers student loans in the UK, processing applications, disbursing funds, and managing repayments.',
                    tags: ['Organization'],
                    plans: [],
                },
                {
                    title: 'Statutory Maternity Pay',
                    acronym: '(SMP)',
                    definition: 'Government-mandated minimum maternity pay (currently £184.03/week). Usually below repayment thresholds, automatically pausing student loan deductions.',
                    tags: ['Income'],
                    plans: [],
                },
                {
                    title: 'Student Finance',
                    definition: 'The service that processes student loan applications in each UK nation (Student Finance England, Wales, Scotland, Northern Ireland).',
                    tags: ['Organization'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Tax Code',
                    definition: 'Code used by employers to calculate tax deductions. Student loan plan indicators (1-5) appear after the main tax code (e.g., 1257L SL2 means Plan 2).',
                    tags: ['Tax'],
                    plans: [],
                },
                {
                    title: 'Tax Year',
                    definition: 'Runs from 6th April to 5th April the following year. Student loan thresholds and interest rates are updated annually aligned with the tax year.',
                    tags: ['Timeline'],
                    plans: [],
                },
                {
                    title: 'Threshold Freeze',
                    definition: 'When repayment thresholds remain unchanged despite inflation, effectively increasing real repayment amounts. Recent freezes ended in 2025/26 with thresholds resuming inflation-linked rises.',
                    tags: ['Policy'],
                    plans: [],
                },
                {
                    title: 'Tuition Fee Loan',
                    definition: 'Money borrowed to cover university tuition fees, paid directly to your institution. Maximum £9,250/year for most English undergraduate degrees.',
                    tags: ['Loan Type'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Umbrella Company',
                    definition: 'Intermediary employment company used by contractors. Deducts PAYE tax and student loans like a standard employer, but charges admin fees.',
                    tags: ['Employment'],
                    plans: [],
                },
                {
                    title: 'Undergraduate Loan',
                    definition: 'Loans taken for first degrees (Bachelor\'s). Includes both tuition fee and maintenance loans, repaid under Plan 1, 2, 4, or 5 depending on circumstances.',
                    tags: ['Loan Type'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5'],
                },
                {
                    title: 'Unearned Income',
                    definition: 'Income not from employment (dividends, rental income, savings interest). Not subject to PAYE deductions but counted in total income for Self Assessment loan calculations.',
                    tags: ['Income'],
                    plans: [],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Variable Income',
                    definition: 'Income that changes month-to-month (commission, bonuses, hourly wages). Student loan deductions through PAYE adjust automatically, but may require Self Assessment reconciliation.',
                    tags: ['Income'],
                    plans: [],
                },
                {
                    title: 'Voluntary Repayment',
                    definition: 'Additional payments you choose to make above automatic deductions. Can be made anytime without penalty, but consider whether financially beneficial given write-off dates.',
                    tags: ['Repayment'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
        {
            terms: [
                {
                    title: 'Wage',
                    definition: 'Payment for work, typically hourly or weekly. Student loan repayments are deducted through PAYE on total wages above the threshold.',
                    tags: ['Income'],
                    plans: [],
                },
                {
                    title: 'Write-Off Date',
                    definition: 'The date when any remaining student loan balance is cancelled. Timing varies by plan: Plan 1 (25 years), Plan 2 (30-40 years depending on start date), Plan 4 (30 years), Plan 5 (40 years), Postgraduate (30 years).',
                    example: 'If you started a Plan 5 loan in September 2024, your write-off date is April 2065 (40 years after the first April following course start).',
                    tags: ['Core Concept'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
                {
                    title: 'Write-Off Period',
                    definition: 'The number of years after which your loan is written off if not fully repaid. The period length depends on your loan plan type and when you started studying.',
                    tags: ['Timeline'],
                    plans: ['plan-1', 'plan-2', 'plan-4', 'plan-5', 'postgraduate'],
                },
            ],
        },
    ];

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W'];

    const filterTerms = (term: Term) => {
        const matchesPlan =
            activePlanFilter === 'all' || term.plans.includes(activePlanFilter);

        const matchesSearch =
            searchTerm === '' ||
            term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (term.acronym && term.acronym.toLowerCase().includes(searchTerm.toLowerCase()));

        return matchesPlan && matchesSearch;
    };

    const getVisibleSections = () => {
        return glossaryData.map((section) => ({
            ...section,
            terms: section.terms.filter(filterTerms),
        })).filter((section) => section.terms.length > 0);
    };

    const visibleSections = getVisibleSections();
    const hasResults = visibleSections.length > 0;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-12 md:py-16 px-5 text-center rounded-b-3xl mb-10">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Student Loan Glossary</h1>
                    <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
                        Your complete guide to UK student loan terminology, definitions, and key concepts
                    </p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-5 pb-20">
                {/* Search Box */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-10">
                    <input
                        type="text"
                        placeholder="Search for a term... (e.g., 'Plan 2', 'threshold', 'write-off')"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-600 transition-colors"
                    />
                </div>

                {/* Plan Filters */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <h3 className="text-lg text-gray-800 mb-4 font-semibold">Filter by Loan Plan:</h3>
                    <div className="flex flex-wrap gap-3">
                        {planFilters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => {
                                    setActivePlanFilter(filter.value);
                                    setSearchTerm('');
                                }}
                                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activePlanFilter === filter.value
                                    ? 'bg-purple-600 text-white border-2 border-purple-600'
                                    : 'bg-gray-100 text-gray-600 border-2 border-transparent hover:bg-purple-50 hover:text-purple-600 hover:-translate-y-0.5'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Alphabet Navigation */}
                <div className="bg-white p-5 rounded-xl shadow-md mb-8 flex flex-wrap gap-2.5 justify-center">
                    {alphabet.map((letter) => (
                        <a
                            key={letter}
                            href={`#${letter}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(letter)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-3 py-2 bg-gray-100 text-purple-600 rounded-md font-semibold transition-all duration-300 hover:bg-purple-600 hover:text-white hover:-translate-y-0.5"
                        >
                            {letter}
                        </a>
                    ))}
                </div>

                {/* No Results */}
                {!hasResults && (
                    <div className="text-center py-10 text-gray-500">
                        <p>No terms found matching your search.</p>
                    </div>
                )}

                {/* Glossary Sections */}
                {visibleSections.map((section, index) => (
                    <div key={index} id={section.terms[0].title.substring(0, 1)} className="bg-white p-6 md:p-8 rounded-xl shadow-md mb-8">

                        {section.terms.map((term, index) => (
                            <div
                                key={index}
                                className={`mb-8 pb-6 ${index !== section.terms.length - 1 ? 'border-b border-gray-200' : ''}`}
                            >
                                <h3 className="text-xl md:text-2xl text-gray-800 mb-3 font-semibold">
                                    {term.title}
                                    {term.acronym && (
                                        <span className="text-purple-600 text-sm md:text-base font-medium ml-2">
                                            {term.acronym}
                                        </span>
                                    )}
                                </h3>

                                <p className="text-gray-600 leading-relaxed mb-3">{term.definition}</p>

                                {term.example && (
                                    <div className="bg-gray-50 p-4 border-l-4 border-purple-600 rounded mt-3">
                                        <strong className="text-purple-600">Example:</strong> {term.example}
                                    </div>
                                )}

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {term.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {term.plans.map((plan, i) => (
                                        <span
                                            key={i}
                                            className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {plan === 'plan-1' ? 'Plan 1' : plan === 'plan-2' ? 'Plan 2' : plan === 'plan-4' ? 'Plan 4' : plan === 'plan-5' ? 'Plan 5' : 'Postgraduate'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-purple-800 hover:-translate-y-1 opacity-100"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            )}

            {/* Footer */}
            <footer className="text-center py-10 px-5 text-gray-500 mt-16">
                <p>
                    © 2025 Student Loan Calculator UK. For official guidance, visit{' '}
                    <a href="https://www.gov.uk/student-finance" className="text-purple-600 hover:underline">
                        gov.uk/student-finance
                    </a>
                </p>
                <p className="mt-2.5 text-sm">
                    This glossary is for informational purposes only. Always verify with the Student Loans Company for your
                    specific circumstances.
                </p>
            </footer>
        </div>
    );
}