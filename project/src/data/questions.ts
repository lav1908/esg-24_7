export interface Question {
  id: string;
  category: 'Environmental' | 'Social' | 'Governance' | 'General';
  question: string;
  options: string[];
  scores: number[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    category: 'General',
    question: 'Is your company listed on a stock exchange?',
    options: [
      'Yes, but we\'re relatively new to ESG.',
      'No, however our major customers/clients are listed companies and require us provide some ESG data.',
      'Yes, and we\'ve been reporting on ESG for a long time.'
    ],
    scores: [5, 3, 10]
  },
  {
    id: 'q2',
    category: 'General',
    question: 'Which of the following statements are true about your business:',
    options: [
      'We publicly report on ESG and have integrated the risk and opportunities thoroughly throughout the business. We have a clear understanding of the financial implications of any failures to meet our goals and targets. We have an alignment with a range of ESG frameworks and have been publicly reporting our performance utilising these frameworks for a number of years.',
      'We haven\'t started reporting publicly but are aware we need to do something about ESG.',
      'We have developed a comprehensive ESG Strategy over a number of years engaging in internal and external stakeholders across risk, finance, people and culture, product, sales, sustainability and executive functions.',
      'We have completed a benchmarking and materiality assessment of our company\'s current performance and have developed a plan.',
      'We have an ESG working group set up who meet quarterly, have developed our responsibility plan and roadmap. We are in the process of reporting against various frameworks such as SGX, GRI, TCFD.'
    ],
    scores: [10, 2, 8, 6, 7]
  },
  {
    id: 'q3',
    category: 'General',
    question: 'Where does the role of ESG sit within our business?',
    options: [
      'Our ESG policy is governed by our board of directors who have a hands-on and proactive approach to dealing with ESG risks and opportunities. We have an ESG team and working group who meet quarterly.',
      'Our leadership are aware of ESG and the need to do something about it but haven\'t defined any specific resources.',
      'We have a dedicated person who collects data from all our different functions on an annual basis. They have full accountability for the ESG role which is governed by our ESG policy.',
      'We have engaged a consultant to guide us to develop a strategy and help with reporting.',
      'We have responsibilities sitting with various functions in the business who have oversight within their business unit of ESG.'
    ],
    scores: [10, 2, 7, 5, 6]
  },
  {
    id: 'q4',
    category: 'General',
    question: 'Are the legal registers maintained to track records of compliance with all the applicable regulations at the company?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'q5',
    category: 'General',
    question: 'Has your company received any notice for regulatory non-compliance or violations of norms or conditions?',
    options: [
      'No',
      'Yes'
    ],
    scores: [10, 0]
  },
  {
    id: 'q6',
    category: 'General',
    question: 'Has your company had any adverse news articles on the following topics in the past 5 years? - Human Rights, Health and Safety, Product Recalls, Sustainability, Corruption or Bribery',
    options: [
      'No',
      'Yes'
    ],
    scores: [10, 0]
  },
  {
    id: 'q7',
    category: 'General',
    question: 'Does your company use any software to centralise and manage your ESG reporting currently?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'q8',
    category: 'General',
    question: 'Are any of the company Directors listed on a sanction screening checklists or political watchlists (PEP)? - Review free online KYC tool - NameScan',
    options: [
      'No',
      'Yes'
    ],
    scores: [10, 0]
  },
  {
    id: 'q9',
    category: 'General',
    question: 'Is your business involved in any of the following industries? - Weapons manufacturing, Pornography, Fossil Fuels, Live animal exporting, Gambling or Tobacco',
    options: [
      'Yes',
      'No'
    ],
    scores: [0, 10]
  },
  {
    id: 'q10',
    category: 'General',
    question: 'Describe your current technology footprint:',
    options: [
      'Accounting software with add-ons to support operational automation',
      'Lightweight or old ERP',
      'Accounting software with spreadsheets to support operational automation',
      'Modern, cloud-based ERP',
      'In-house home-grown or bespoke-built application(s)'
    ],
    scores: [6, 4, 5, 10, 7]
  },
  {
    id: 'e1',
    category: 'Environmental',
    question: 'Have you measured your businesses carbon footprint?',
    options: [
      'Yes, we have done it for a few years',
      'Yes, and we have an emissions reduction plan and public targets set for our pathway to net zero.',
      'No, we\'re not sure where to begin',
      'Yes, 2023 was our first year.',
      'No, but we\'ve started the process to collecting data'
    ],
    scores: [7, 10, 0, 5, 3]
  },
  {
    id: 'e2',
    category: 'Environmental',
    question: 'Does your business have an environmental policy which specifically references risks associated with all of the following areas? Energy Consumption and Greenhouse gases, Waste Management, Water Consumption, Air Pollution, Materials, Chemicals and Waste, Biodiversity, Customer Health & Safety and Promotion of Sustainable Consumption',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'e3',
    category: 'Environmental',
    question: 'Does your company communicate progress towards the Sustainable Development Goals (SDGs)?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'e4',
    category: 'Environmental',
    question: 'How developed is our climate related financial disclosures?',
    options: [
      'We don\'t have a clear understanding of what impacts climate change might have on our business.',
      'We have begun understanding climate related risks but it is early in the process.',
      'We have a clear understanding of the impacts of ESG factors and climate risk factors to our business and have completed a materiality assessment to understand the financial implications of doing or not doing certain activities.',
      'We have a risk management policy that identifies ESG Factors and climate risk factors that might have a material impact on our business.',
      'We have a comprehensive understanding of the financial implications of climate related risks. We have integrated this into our risk management processes and review all new/emerging risks on a quarterly basis. We have a risk register which is auditable and has been tracking these material risks for a long time.'
    ],
    scores: [0, 3, 8, 6, 10]
  },
  {
    id: 'e5',
    category: 'Environmental',
    question: 'Has your company and/or any operational facilities been certified ISO 14001?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'e6',
    category: 'Environmental',
    question: 'Has your company commenced climate-related financial disclosures including information relating to governance, strategy, risk management and metrics and targets (including Scope 1 and Scope 2 greenhouse gas emissions – e.g. % of GHG emissions reduction per square feet (CO2eq/sq.ft), % GHG emissions reduction per ton of cement produced (CO2eq/ton)?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'e7',
    category: 'Environmental',
    question: 'Has your company completed a climate resilience assessment including qualitative scenario analysis, with quantitative analysis required for financial years commencing on or after 2027? This should use at least two possible future scenarios and one of these scenarios must align with the most ambitious global temperature goal in relation to the Intergovernmental Panel on Climate Change (IPCC) (i.e. limiting global warming to 1.5 degrees).',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'e8',
    category: 'Environmental',
    question: 'Has your company done an assessment on resource use to identify raw materials & product materials review (including % of imported materials) for any manufactured goods?',
    options: [
      'Yes',
      'Not Applicable',
      'No'
    ],
    scores: [10, 5, 0]
  },
  {
    id: 'e9',
    category: 'Environmental',
    question: 'Does your company complete an annual review of open grant opportunities both locally and globally that could help complete research and development for increasing sustainability in the business? Energy Efficiency, Waste Performance, Sustainable Packaging, Circular Economy, Raw Materials Sourcing and Water Consumption.',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'e10',
    category: 'Environmental',
    question: 'Does your company currently use any software to collate data on carbon footprint?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'e11',
    category: 'Environmental',
    question: 'Have you declared and shared publicly sustainability targets surrounding waste reduction, fuel usage or water consumption in the following format? Year, Value, Unit (e.g. gigajoules, liters/gallons of fuel, tonnes of waste diverted from landfill), Supporting documentation',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 's1',
    category: 'Social',
    question: 'Is ESG integrated into our employee management and training? - Human Rights, Health and Safety, Product Recalls, Sustainability, Corruption or Bribery',
    options: [
      'We don\'t have any formal training requirements and targets for all staff, except for the employees specifically overseeing our ESG strategy.',
      'New staff are onboarded and provided training on our organisations ESG policy, KPIs and objectives. Existing staff are regularly trained annually and have continual professional development targets to meet.',
      'We do not have any annual training and education requirements for any staff.',
      'Our ESG training and development is comprehensive and monitored on at least a quarterly basis. Our executive\'s remuneration is tied to ESG KPIs. This is only shared internally with HR and senior leadership.',
      'Our ESG training and development is comprehensive and monitored on at least a quarterly basis. Our executive\'s remuneration is tied to ESG KPIs. This shared and reported on publicly to shareholders and external stakeholders.'
    ],
    scores: [3, 7, 0, 8, 10]
  },
  {
    id: 's2',
    category: 'Social',
    question: 'Is our business a good partner to society?',
    options: [
      'We don\'t currently have a budget to support social, cultural or environmental initiatives.',
      'Our organisation has a foundation set up to help support the communities and people we impact and is allocated a % of our profit every year.',
      'We support social, cultural or environmental projects by sponsorship and/or cooperation.',
      'We have linked our we support social, cultural or environmental projects to the Sustainable Development Goals and KPIs'
    ],
    scores: [0, 10, 5, 8]
  },
  {
    id: 's3',
    category: 'Social',
    question: 'Does your company have a policy with qualitative objectives and quantitative targets for Labor & Human Rights Policies? • Employees health and safety (e.g. management of employees health and safety issues) • Working Conditions (e.g. wages, benefits and working hours) • Career Management (e.g. training & career development) • Diversity, Equity & Inclusion - Human Rights, Health and Safety, Product Recalls, Sustainability, Corruption or Bribery',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 's4',
    category: 'Social',
    question: 'Does your organisation have strong measures in place on health and safety? • Procedure in place to anticipate health & safety risks related to change of operations • Provision of protective equipment to all impacted employees • Specific procedures for handling of chemicals or hazardous substances • Health and Safety procedures translated in major languages spoken by employees • Training of all relevant employees on health and safety risks and good working practices',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 's5',
    category: 'Social',
    question: 'Are all the following working conditions have been implemented throughout your entire scope of operations? • Compensation/remuneration for overtime working hours • Paid annual vacation • Employees are paid statutory minimum wages',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 's6',
    category: 'Social',
    question: 'What actions are in place regarding working conditions? • Family Friendly programs (FFPs) implemented (e.g. parental or care leaves, childcare services or allowances) • Flexible organization of work (eg. remote work, flexi-time) • Employee satisfaction survey',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 's7',
    category: 'Social',
    question: 'Does your organisation track any of the following key metrics and targets of your Diversity, Equity and Inclusion policy? • Percentage of workers from minority groups and/or vulnerable workers employed in relation to the whole organization • Percentage of workers from minority groups and/or vulnerable workers in top executive positions • Percentage of women in top executive positions (excluding boards of directors) • Percentage of women within the organization\'s board • Average unadjusted gender pay gap',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 's8',
    category: 'Social',
    question: 'Does your organisation report on Key Performance Indicators (KPIs) for any of the following topics? • Employee Health & Safety (e.g. injuries at work) • Working Conditions (e.g. employee satisfaction) • Supply Chain Assessments (e.g. training, diversity or sustainability) • Diversity, Equity & Inclusion (e.g. women in leadership positions)',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 's9',
    category: 'Social',
    question: 'Does your organisation have a community engagement plan to address acceptance from local communities, affected peoples or customers? Does this include an understanding of your businesses Social License to Operate.',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 's10',
    category: 'Social',
    question: 'Does your organisation have a marketing plan that incorporates competitive behaviour, ethical marketing and consumer rights? – this plan should address avoiding misleading advertising and protecting consumer rights.',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g1',
    category: 'Governance',
    question: 'Does your organisation have strong governance policies, Internal practices, controls, and procedures for effective decision-making? Consider all risks associated with the following: Board composition, executive pay, audits, and shareholder rights, Cybersecurity and Digital Risk Management, Disaster recovery, Conflict of Interest Management, Anti-Bribery and Anti-Corruption, Regulatory risk and compliance, Internal controls and auditing, Whistleblower policy and protection.',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g2',
    category: 'Governance',
    question: 'Does your organisation have a Risk Management Framework incorporating ESG into decision making processes?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g3',
    category: 'Governance',
    question: 'Does the Risk Management Framework include the following documents? Risk Appetite Statement (RAS), which sets out our risk appetite at an aggregate level as well as the types of risk that we are willing to assume to achieve our strategic objectives. Risk Management Framework (RMF), which documents our approach and governance structure for identifying, assessing, measuring and managing risks.',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g4',
    category: 'Governance',
    question: 'Has your business conducted an ESG Materiality Assessment to determine which ESG factors are relevant for the business?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g5',
    category: 'Governance',
    question: 'How visible is our supply chain?',
    options: [
      'Our legal team have clauses in our supplier contracts. Our procurement team review compliance with these clauses on an ad hoc basis.',
      'We have a procurement team who manages supply chain engagement. There currently is minimal oversight of ESG risk within the supply chain.',
      'We have complete visibility of environmental, social, governance and modern slavery risks in our supply chain. Disclose publicly our supply chain risks, train staff regularly to identify new risks. We have a strong competence on Modern Slavery risks in the supply chain. We collect data on scope 3 emissions from our suppliers. Our suppliers are incentivized to improve their ESG performance.',
      'We have complete visibility of environmental, social, governance and modern slavery risks in our supply chain. We have identified specific suppliers in high-risk industries and jurisdictions. We have tracked this in a supply chain ESG risk management register which is updated as new ESG risks emerge.',
      'We have a strong visibility of our supplier chain, have conducted multiple workshops internally to understand what ESG risks exist in the supply chain. We have tracked this in a supply chain ESG risk management register which is updated as new ESG risks emerge.'
    ],
    scores: [4, 2, 10, 8, 6]
  },
  {
    id: 'g6',
    category: 'Governance',
    question: 'Has your business completed a cyber and digital risk assessment incorporating protecting information and keeping it secure from digital attacks in the past 12 months?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g7',
    category: 'Governance',
    question: 'Are the following processes in place to protect information and keep it secure from digital attacks? Two Factor Authentication (2FA), Biometric sign in, Password management systems, Cyber security policies, Employee clearance levels for sensitive information, Critical infrastructure security, Network security, Cloud security or IoT Security',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g8',
    category: 'Governance',
    question: 'Does your organisation have a whistleblower mechanisms covering the following? Delegated staff member/s, Confidential mechanism for staff to raise concerns, including past staff, Protections in place for the whistleblower, Outline what is reportable conduct, Phone number or online submission site, Phone number or online submission site and Process for reviewing and investigating.',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g9',
    category: 'Governance',
    question: 'Does your company have a sustainable procurement policy with qualitative objectives and quantitative targets? Incorporating topics like the following: Chemical Use, Packaging, Raw Materials, Transport, CSR and Sustainability Credentials',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g10',
    category: 'Governance',
    question: 'Does your organisation have an anti-bribery and anti-corruption policy?',
    options: [
      'Yes',
      'No'
    ],
    scores: [10, 0]
  },
  {
    id: 'g11',
    category: 'Governance',
    question: 'Does your organisation have a code of conduct or employee handbook/ conflict of interest handbook addressing the employee\'s response to bribery, data protection, confidential information and social media?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g12',
    category: 'Governance',
    question: 'Has your organisation aligned ESG goals with corporate strategy and succession planning, including outlining the role of senior management and board members in driving ESG initiatives.',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g13',
    category: 'Governance',
    question: 'Have you engaged an external consultancy to review your ESG program and present best practice?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  },
  {
    id: 'g14',
    category: 'Governance',
    question: 'Is there an annual training program for the Board of Directors incorporating ESG topics?',
    options: [
      'No',
      'Yes'
    ],
    scores: [0, 10]
  }
];

export const industries = [
  'Agriculture',
  'Automotive',
  'Banking & Financial Services',
  'Construction',
  'Education',
  'Energy & Utilities',
  'Food & Beverage',
  'Healthcare',
  'Hospitality & Tourism',
  'Information Technology',
  'Insurance',
  'Manufacturing',
  'Media & Entertainment',
  'Mining & Metals',
  'Pharmaceuticals',
  'Real Estate',
  'Retail',
  'Telecommunications',
  'Transportation & Logistics',
  'Other'
];

export const revenues = [
  'Less than $1M',
  '$1M - $10M',
  '$10M - $50M',
  '$50M - $100M',
  '$100M - $500M',
  '$500M - $1B',
  'More than $1B'
];

export const employeeCounts = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '501-1000',
  '1001-5000',
  '5000+'
];

export const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'North Korea',
  'South Korea',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];

export function calculateScores(responses: Record<string, string>) {
  let environmentalScore = 0;
  let socialScore = 0;
  let governanceScore = 0;

  questions.forEach((question) => {
    const response = responses[question.id];
    if (response) {
      const optionIndex = question.options.indexOf(response);
      if (optionIndex !== -1) {
        const score = question.scores[optionIndex];
        if (question.category === 'Environmental') {
          environmentalScore += score;
        } else if (question.category === 'Social') {
          socialScore += score;
        } else if (question.category === 'Governance') {
          governanceScore += score;
        } else if (question.category === 'General') {
          // Distribute General category scores equally across all three categories
          const distributedScore = Math.round(score / 3);
          environmentalScore += distributedScore;
          socialScore += distributedScore;
          governanceScore += distributedScore;
        }
      }
    }
  });

  const totalScore = environmentalScore + socialScore + governanceScore;

  return {
    environmental: environmentalScore,
    social: socialScore,
    governance: governanceScore,
    total: totalScore,
    maxEnvironmental: 100,
    maxSocial: 120,
    maxGovernance: 140,
    maxTotal: 360
  };
}

export function getPerformanceLevel(score: number, maxScore: number): string {
  const percentage = (score / maxScore) * 100;
  if (percentage >= 75) return 'High';
  if (percentage >= 60) return 'Medium High';
  if (percentage >= 40) return 'Medium';
  return 'Low';
}
