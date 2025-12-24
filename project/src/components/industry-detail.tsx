import { ArrowLeft, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';

interface IndustryDetailProps {
  industry: string;
  onBack: () => void;
  onStartAssessment: () => void;
}

export function IndustryDetail({ industry, onBack, onStartAssessment }: IndustryDetailProps) {
  const industryData = {
    healthcare: {
      title: 'Healthcare Industry',
      icon: '🏥',
      description: 'Healthcare organizations face unique ESG challenges including patient safety, medical waste management, healthcare accessibility, and ethical pharmaceutical practices.',
      overview: 'The healthcare sector is increasingly focused on sustainable practices while maintaining the highest standards of patient care. ESG considerations in healthcare encompass environmental stewardship, social responsibility, and governance excellence.',
      challenges: [
        'Medical waste management and disposal',
        'Patient data privacy and security',
        'Healthcare accessibility and equity',
        'Pharmaceutical supply chain ethics',
        'Energy consumption in medical facilities',
        'Chemical and hazardous material handling'
      ],
      solutions: [
        'Waste tracking and reduction programs',
        'Patient safety metrics dashboard',
        'Healthcare equity reporting',
        'Supply chain risk assessment',
        'Energy efficiency monitoring',
        'Compliance management systems'
      ],
      benefits: [
        'Improved patient outcomes and safety',
        'Reduced operational costs through efficiency',
        'Enhanced regulatory compliance',
        'Better community health impact',
        'Stronger stakeholder trust',
        'Competitive advantage in healthcare market'
      ],
      stats: {
        wasteReduction: '35%',
        energySavings: '28%',
        complianceScore: '94%'
      }
    },
    financial: {
      title: 'Financial Services',
      icon: '🏦',
      description: 'Financial institutions are at the forefront of ESG integration, managing climate risks, promoting sustainable finance, and ensuring inclusive financial services.',
      overview: 'The financial sector plays a crucial role in driving sustainable economic growth through responsible lending, investment practices, and risk management while maintaining regulatory compliance.',
      challenges: [
        'Climate risk assessment and management',
        'Sustainable investment strategies',
        'Financial inclusion initiatives',
        'Regulatory compliance (TCFD, SFDR)',
        'ESG data integration and reporting',
        'Green finance product development'
      ],
      solutions: [
        'ESG investment portfolio analysis',
        'Climate scenario modeling',
        'Diversity and inclusion tracking',
        'Automated regulatory reporting',
        'Risk assessment frameworks',
        'Sustainable finance metrics'
      ],
      benefits: [
        'Enhanced risk management capabilities',
        'Improved investment performance',
        'Regulatory compliance assurance',
        'Increased customer trust and loyalty',
        'Access to sustainable finance markets',
        'Competitive differentiation'
      ],
      stats: {
        riskReduction: '42%',
        portfolioPerformance: '+15%',
        complianceScore: '97%'
      }
    },
    infrastructure: {
      title: 'Infrastructure Sector',
      icon: '🏗️',
      description: 'Infrastructure projects have long-term environmental and social impacts, requiring comprehensive ESG management from planning to operation.',
      overview: 'Infrastructure development shapes communities and environments for decades. ESG considerations ensure sustainable, resilient, and socially beneficial infrastructure that serves current and future generations.',
      challenges: [
        'Carbon-intensive construction materials',
        'Community displacement and engagement',
        'Resource efficiency and waste reduction',
        'Long-term environmental impact',
        'Worker safety and labor practices',
        'Biodiversity and ecosystem protection'
      ],
      solutions: [
        'Carbon footprint calculation tools',
        'Community impact assessment',
        'Material sustainability tracking',
        'Environmental monitoring systems',
        'Safety management platforms',
        'Stakeholder engagement tools'
      ],
      benefits: [
        'Reduced environmental footprint',
        'Improved community relations',
        'Enhanced project sustainability',
        'Better regulatory approval rates',
        'Lower long-term operational costs',
        'Increased investor confidence'
      ],
      stats: {
        carbonReduction: '38%',
        communityApproval: '89%',
        costSavings: '22%'
      }
    },
    transportation: {
      title: 'Transportation Industry',
      icon: '🚛',
      description: 'Transportation companies are transforming their operations to reduce emissions, improve safety, and optimize logistics while maintaining service quality.',
      overview: 'The transportation sector is critical for economic activity but faces significant ESG challenges including emissions reduction, driver welfare, and supply chain transparency.',
      challenges: [
        'Fleet emissions and fuel efficiency',
        'Driver safety and working conditions',
        'Supply chain transparency',
        'Last-mile delivery optimization',
        'Alternative fuel adoption',
        'Route efficiency and congestion'
      ],
      solutions: [
        'Fleet emissions monitoring',
        'Driver wellness programs',
        'Route optimization for efficiency',
        'Supplier sustainability scorecards',
        'Alternative fuel tracking',
        'Safety incident management'
      ],
      benefits: [
        'Reduced fuel costs and emissions',
        'Improved driver satisfaction and retention',
        'Enhanced operational efficiency',
        'Better customer service delivery',
        'Regulatory compliance assurance',
        'Competitive market positioning'
      ],
      stats: {
        emissionsReduction: '31%',
        fuelSavings: '26%',
        safetyImprovement: '45%'
      }
    }
  };

  const data = industryData[industry as keyof typeof industryData];

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Industries
          </button>
          <div className="flex items-center">
            <span className="text-4xl mr-4">{data.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
              <p className="text-lg text-gray-600 mt-2">{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={
            industry === 'healthcare' ? 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
            industry === 'financial' ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
            industry === 'infrastructure' ? 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' :
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
          }
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-2">ESG Solutions for {data.title}</h2>
            <p className="text-xl text-gray-200">Tailored sustainability strategies for your industry</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Overview</h2>
          <p className="text-gray-700 leading-relaxed">{data.overview}</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-2">
              {Object.values(data.stats)[0]}
            </div>
            <div className="text-gray-600">{Object.keys(data.stats)[0].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {Object.values(data.stats)[1]}
            </div>
            <div className="text-gray-600">{Object.keys(data.stats)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {Object.values(data.stats)[2]}
            </div>
            <div className="text-gray-600">{Object.keys(data.stats)[2].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
          </div>
        </div>

        {/* Challenges and Solutions */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key ESG Challenges</h3>
            <ul className="space-y-3">
              {data.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">TNOVA ESG Solutions</h3>
            <ul className="space-y-3">
              {data.solutions.map((solution, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Benefits of ESG Implementation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your {data.title}?</h3>
          <p className="text-blue-100 mb-6">
            Start with our industry-specific ESG assessment tailored for {data.title.toLowerCase()} organizations.
          </p>
          <button
            onClick={onStartAssessment}
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Start {data.title} ESG Assessment
          </button>
        </div>
      </div>
    </div>
  );
}