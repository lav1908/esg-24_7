import { CheckCircle2, BarChart3, Users, Leaf, TrendingUp, Globe, Shield, Award, Building2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AssessmentModal } from './assessment-modal';
import { IndustryDetail } from './industry-detail';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [showIndustryDetail, setShowIndustryDetail] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    companies: 0,
    reports: 0,
    countries: 0,
    savings: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        companies: 25,
        reports: 15,
        countries: 150,
        savings: 85
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (showIndustryDetail && selectedIndustry) {
    return (
      <IndustryDetail
        industry={selectedIndustry}
        onBack={() => {
          setShowIndustryDetail(false);
          setSelectedIndustry(null);
        }}
        onStartAssessment={() => {
          setShowIndustryDetail(false);
          setSelectedIndustry(null);
          setShowModal(true);
        }}
      />
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text and CTA */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                ESG Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              The world's most comprehensive ESG platform. Get real-time insights, automated reporting, and expert guidance to accelerate your sustainability goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Assessment
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right side - Premium iPad/Tablet Mockup */}
          <div className="relative" style={{perspective: '1000px'}}>
            <div className="relative transform" style={{transform: 'rotateY(-12deg) rotateX(8deg)'}}>
              {/* Tablet Shadow */}
              <div className="absolute inset-0 bg-black/30 blur-3xl transform translate-y-12 scale-105"></div>
              
              {/* iPad Frame */}
              <div className="relative max-w-md mx-auto">
                {/* Outer Frame */}
                <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 rounded-3xl p-3 shadow-2xl">
                  {/* Inner Frame */}
                  <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-2">
                    {/* Screen */}
                    <div className="bg-black rounded-xl overflow-hidden relative aspect-[4/3]">
                      {/* Screen Content */}
                      <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 h-full overflow-hidden relative">
                        {/* Screen Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none"></div>
                        
                        {/* Dashboard Content */}
                        <div className="relative p-6 h-full">
                          {/* Status Bar */}
                          <div className="flex items-center justify-between mb-4 text-white">
                            <div className="text-xs font-medium">9:41 AM</div>
                            <div className="text-xs font-semibold text-blue-400">TNOVA ESG</div>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-white rounded-sm opacity-60"></div>
                              <div className="text-xs">100%</div>
                            </div>
                          </div>
                          
                          {/* Main Stats Dashboard */}
                          <div className="space-y-4">
                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gradient-to-br from-blue-600/30 to-blue-800/40 backdrop-blur-sm rounded-2xl p-4 border border-blue-500/30 shadow-lg">
                                <div className="text-2xl font-bold text-blue-300 mb-1">
                                  {animatedStats.companies.toLocaleString()}+
                                </div>
                                <div className="text-xs text-blue-200 font-medium">Companies</div>
                                <div className="mt-1 flex items-center text-xs text-green-400">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  +12%
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-green-600/30 to-emerald-800/40 backdrop-blur-sm rounded-2xl p-4 border border-green-500/30 shadow-lg">
                                <div className="text-2xl font-bold text-green-300 mb-1">
                                  {animatedStats.reports.toLocaleString()}+
                                </div>
                                <div className="text-xs text-green-200 font-medium">Reports</div>
                                <div className="mt-1 flex items-center text-xs text-green-400">
                                  <BarChart3 className="w-3 h-3 mr-1" />
                                  Live
                                </div>
                              </div>
                            </div>
                            
                            {/* ESG Performance */}
                            <div className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 rounded-2xl p-4 border border-gray-600/40">
                              <h3 className="text-white font-semibold mb-3 flex items-center text-sm">
                                <Shield className="w-4 h-4 mr-2 text-purple-400" />
                                ESG Performance
                              </h3>
                              <div className="grid grid-cols-3 gap-3">
                                <div className="text-center">
                                  <div className="relative w-12 h-12 mx-auto mb-2">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#374151" strokeWidth="10" />
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#10b981" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${85 * 3.14} 314`} className="transition-all duration-2000" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-sm font-bold text-green-400">85</div>
                                    </div>
                                  </div>
                                  <div className="text-xs text-green-300 font-medium">Environmental</div>
                                </div>
                                <div className="text-center">
                                  <div className="relative w-12 h-12 mx-auto mb-2">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#374151" strokeWidth="10" />
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#3b82f6" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${78 * 3.14} 314`} className="transition-all duration-2000" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-sm font-bold text-blue-400">78</div>
                                    </div>
                                  </div>
                                  <div className="text-xs text-blue-300 font-medium">Social</div>
                                </div>
                                <div className="text-center">
                                  <div className="relative w-12 h-12 mx-auto mb-2">
                                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#374151" strokeWidth="10" />
                                      <circle cx="60" cy="60" r="50" fill="none" stroke="#8b5cf6" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${92 * 3.14} 314`} className="transition-all duration-2000" />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="text-sm font-bold text-purple-400">92</div>
                                    </div>
                                  </div>
                                  <div className="text-xs text-purple-300 font-medium">Governance</div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bottom Stats */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gradient-to-br from-purple-600/30 to-indigo-800/40 backdrop-blur-sm rounded-2xl p-3 border border-purple-500/30">
                                <div className="text-xl font-bold text-purple-300">{animatedStats.countries}+</div>
                                <div className="text-xs text-purple-200">Countries</div>
                              </div>
                              <div className="bg-gradient-to-br from-indigo-600/30 to-blue-800/40 backdrop-blur-sm rounded-2xl p-3 border border-indigo-500/30">
                                <div className="text-xl font-bold text-indigo-300">{animatedStats.savings}%</div>
                                <div className="text-xs text-indigo-200">Savings</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating Indicators */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full p-4 shadow-xl animate-pulse">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full p-4 shadow-xl animate-bounce">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {animatedStats.companies.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Companies Trust Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {animatedStats.reports.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Reports Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {animatedStats.countries}+
              </div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {animatedStats.savings}%
              </div>
              <div className="text-gray-600 font-medium">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete ESG Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to measure, manage, and report your ESG performance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {/* Environmental Impact 3D Card */}
            <div className="flex items-center justify-center" style={{perspective: '1000px'}}>
              <div className="transition-all duration-200 ease-linear" style={{transformStyle: 'preserve-3d'}} onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 25;
                const y = (e.clientY - rect.top - rect.height / 2) / 25;
                e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
              }}>
                <div className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl border-2 border-black w-96 h-auto" style={{transformStyle: 'preserve-3d'}}>
                  <div className="w-full h-48 mb-8 rounded-xl overflow-hidden border-2 border-black" style={{transform: 'translateZ(60px) rotateX(10deg)'}}>
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Environmental sustainability"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{transform: 'translateZ(40px)'}}>Environmental Impact</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{transform: 'translateZ(30px)'}}>
                    Track carbon footprint, energy usage, waste management, and sustainability initiatives with real-time monitoring.
                  </p>
                  <div className="text-sm text-green-600 font-medium" style={{transform: 'translateZ(20px)'}}>Carbon tracking • Energy monitoring • Waste analytics</div>
                </div>
              </div>
            </div>

            {/* Social Responsibility 3D Card */}
            <div className="flex items-center justify-center" style={{perspective: '1000px'}}>
              <div className="transition-all duration-200 ease-linear" style={{transformStyle: 'preserve-3d'}} onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 25;
                const y = (e.clientY - rect.top - rect.height / 2) / 25;
                e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
              }}>
                <div className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl border-2 border-black w-96 h-auto" style={{transformStyle: 'preserve-3d'}}>
                  <div className="w-full h-48 mb-8 rounded-xl overflow-hidden border-2 border-black" style={{transform: 'translateZ(60px) rotateX(10deg)'}}>
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      alt="Team collaboration and diversity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{transform: 'translateZ(40px)'}}>Social Responsibility</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{transform: 'translateZ(30px)'}}>
                    Measure diversity, employee satisfaction, community impact, and stakeholder engagement across your organization.
                  </p>
                  <div className="text-sm text-blue-600 font-medium" style={{transform: 'translateZ(20px)'}}>Diversity metrics • Employee wellness • Community impact</div>
                </div>
              </div>
            </div>

            {/* Governance Excellence 3D Card */}
            <div className="flex items-center justify-center" style={{perspective: '1000px'}}>
              <div className="transition-all duration-200 ease-linear" style={{transformStyle: 'preserve-3d'}} onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / 25;
                const y = (e.clientY - rect.top - rect.height / 2) / 25;
                e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)';
              }}>
                <div className="bg-white rounded-2xl p-12 shadow-lg hover:shadow-xl border-2 border-black w-96 h-auto" style={{transformStyle: 'preserve-3d'}}>
                  <div className="w-full h-48 mb-8 rounded-xl overflow-hidden border-2 border-black" style={{transform: 'translateZ(60px) rotateX(10deg)'}}>
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Corporate governance and business analytics"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4" style={{transform: 'translateZ(40px)'}}>Governance Excellence</h3>
                  <p className="text-gray-600 leading-relaxed mb-4" style={{transform: 'translateZ(30px)'}}>
                    Ensure compliance, transparency, and ethical practices with comprehensive governance frameworks and reporting.
                  </p>
                  <div className="text-sm text-purple-600 font-medium" style={{transform: 'translateZ(20px)'}}>Compliance tracking • Risk management • Ethics monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries We Serve Section */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">TNOVA ESG serves a wide variety of industries with tailored ESG solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-transparent hover:border-red-500 hover:shadow-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] hover:ring-4 hover:ring-red-500/30" onClick={() => {
              setSelectedIndustry('healthcare');
              setShowIndustryDetail(true);
            }}>
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-sm text-gray-600">Patient safety, medical waste management, and healthcare accessibility</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-transparent hover:border-green-500 hover:shadow-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] hover:ring-4 hover:ring-green-500/30" onClick={() => {
              setSelectedIndustry('financial');
              setShowIndustryDetail(true);
            }}>
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Services</h3>
              <p className="text-sm text-gray-600">Sustainable finance, risk management, and regulatory compliance</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-transparent hover:border-blue-500 hover:shadow-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:ring-4 hover:ring-blue-500/30" onClick={() => {
              setSelectedIndustry('infrastructure');
              setShowIndustryDetail(true);
            }}>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure</h3>
              <p className="text-sm text-gray-600">Sustainable construction, urban planning, and resource efficiency</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-transparent hover:border-purple-500 hover:shadow-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:ring-4 hover:ring-purple-500/30" onClick={() => {
              setSelectedIndustry('transportation');
              setShowIndustryDetail(true);
            }}>
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-4xl">🚛</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transportation</h3>
              <p className="text-sm text-gray-600">Fleet management, emissions reduction, and logistics optimization</p>
            </div>
          </div>
          

        </div>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onStartAssessment={onGetStarted}
      />
    </div>
  );
}