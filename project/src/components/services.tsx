import { CheckCircle, TrendingUp, Shield, Users, Leaf, BarChart3, FileText, Globe, Award, Target } from 'lucide-react';
import { useState } from 'react';
import { AssessmentModal } from './assessment-modal';

interface ServicesProps {
  onGetAssessment?: () => void;
}

export function Services({ onGetAssessment }: ServicesProps) {
  const [showModal, setShowModal] = useState(false);
  const services = [
    {
      id: 1,
      title: "ESG Strategy & Consulting",
      description: "Comprehensive ESG strategy development, materiality assessments, and stakeholder engagement to align your business with sustainability goals.",
      features: ["Materiality Assessment", "ESG Strategy Development", "Stakeholder Engagement", "Risk Assessment"],
      icon: Target,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "blue"
    },
    {
      id: 2,
      title: "ESG Reporting & Disclosure",
      description: "Professional ESG reporting services including GRI, SASB, TCFD, and CSRD compliance with automated data collection and analysis.",
      features: ["GRI Standards Reporting", "SASB Framework", "TCFD Disclosure", "CSRD Compliance"],
      icon: FileText,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      color: "green"
    },
    {
      id: 3,
      title: "Carbon Footprint Management",
      description: "Complete carbon footprint assessment, reduction strategies, and net-zero pathway development with real-time monitoring and reporting.",
      features: ["Carbon Footprint Assessment", "Scope 1, 2 & 3 Emissions", "Net-Zero Strategy", "Carbon Offsetting"],
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "emerald"
    },
    {
      id: 4,
      title: "Supply Chain ESG Management",
      description: "End-to-end supply chain ESG risk assessment, supplier evaluation, and sustainable procurement strategies.",
      features: ["Supplier ESG Assessment", "Risk Management", "Sustainable Procurement", "Supply Chain Mapping"],
      icon: Globe,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "purple"
    },
    {
      id: 5,
      title: "ESG Data & Analytics",
      description: "Advanced ESG data management, analytics, and visualization tools with automated reporting and performance tracking.",
      features: ["Data Management Platform", "Performance Analytics", "Automated Reporting", "KPI Dashboards"],
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "indigo"
    },
    {
      id: 6,
      title: "ESG Training & Capacity Building",
      description: "Comprehensive ESG training programs for executives, employees, and board members to build internal ESG capabilities.",
      features: ["Executive Training", "Employee Workshops", "Board Education", "Certification Programs"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      color: "orange"
    },
    {
      id: 7,
      title: "ESG Risk Management",
      description: "Comprehensive ESG risk identification, assessment, and mitigation strategies with integrated risk management frameworks.",
      features: ["Risk Identification", "Impact Assessment", "Mitigation Strategies", "Risk Monitoring"],
      icon: Shield,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "red"
    },
    {
      id: 8,
      title: "ESG Performance Improvement",
      description: "Continuous improvement programs to enhance ESG performance with benchmarking, target setting, and progress monitoring.",
      features: ["Performance Benchmarking", "Target Setting", "Improvement Plans", "Progress Monitoring"],
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "teal"
    },
    {
      id: 9,
      title: "ESG Certification & Assurance",
      description: "Third-party ESG certification and assurance services to validate your sustainability claims and build stakeholder trust.",
      features: ["Third-Party Verification", "ESG Certification", "Assurance Services", "Compliance Validation"],
      icon: Award,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      emerald: "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
      purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
      indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
      orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
      red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
      teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
      pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Our ESG Services
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Comprehensive ESG solutions to help your organization achieve sustainability goals, 
            ensure compliance, and drive long-term value creation.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete ESG Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to implementation and reporting, we provide end-to-end ESG services 
              tailored to your organization's unique needs and industry requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}>
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TNOVA ESG</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep ESG expertise with cutting-edge technology to deliver measurable results 
              and drive sustainable business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified ESG professionals with decades of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">Cutting-edge ESG data management and analytics platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Offices across 4 continents serving clients worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">85% cost savings and measurable ESG improvements</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your ESG Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get started with a free ESG assessment and discover how TNOVA ESG can help your organization 
            achieve its sustainability goals and drive long-term value creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Assessment
            </button>
          </div>
        </div>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onStartAssessment={() => {
          setShowModal(false);
          if (onGetAssessment) {
            onGetAssessment();
          }
        }}
      />
    </div>
  );
}