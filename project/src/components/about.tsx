import { CheckCircle, Globe, Users, TrendingUp, Shield, BookOpen, Target, Award, Lightbulb } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

export function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About TNOVA ESG
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Leading the future of sustainable business practices through innovative ESG solutions and comprehensive reporting platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                TNOVA ESG is a comprehensive, one-stop platform designed to meet all your ESG reporting and training needs, 
                regardless of your business size, location, or level of ESG experience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By utilizing innovative and interactive technology, TNOVA ESG provides an affordable alternative to traditional 
                programs, offering reporting and training services that typically cost ten times more than our current software fees.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Companies Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600">Cost Savings</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="ESG Business Meeting" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to sustainable business practices.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in complete transparency in ESG reporting, providing clear insights and data-driven solutions 
                that help businesses make informed decisions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Our cutting-edge technology and innovative approaches make ESG reporting accessible and affordable 
                for businesses of all sizes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every aspect of our platform, from user experience to reporting accuracy 
                and customer support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                alt="ESG Analytics Dashboard" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The story of TNOVA ESG is rooted in the expertise of specialist ESG consultants with decades of experience. 
                The platform was specifically designed to empower Small-to-Medium Businesses (SMBs), giving them the tools 
                to start their ESG journey.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We help businesses remain compliant with changing legislation and meet the rising ESG expectations 
                of clients and financial institutions through our comprehensive platform and expert guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Founded by ESG specialists with decades of experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Designed specifically for SMBs and growing enterprises</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Comprehensive compliance and reporting solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ESG solutions designed to help your business thrive in a sustainable future.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">ESG Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive ESG health checks and risk assessments to identify strengths and improvement areas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Reporting Tools</h3>
              <p className="text-gray-600 text-sm">
                Unlimited reports covering carbon footprint, SDGs, supply chain risk, and annual ESG reports.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Training & Education</h3>
              <p className="text-gray-600 text-sm">
                Exclusive training materials and workshops for various roles from CEOs to department heads.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Compliance Management</h3>
              <p className="text-gray-600 text-sm">
                Governance, policies, and procedures management with regulatory compliance tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <Globe className="w-10 h-10 text-blue-600 mr-3" />
              Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Operating globally with offices strategically located across four continents to serve our clients worldwide.
            </p>
          </div>
          
          {/* World Map */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
            <div className="relative w-full h-96 bg-white rounded-xl shadow-lg overflow-hidden">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                  scale: 120,
                  center: [0, 20]
                }}
                width={800}
                height={400}
                className="w-full h-full"
              >
                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#e5e7eb"
                        stroke="#d1d5db"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none", fill: "#d1d5db" },
                          pressed: { outline: "none" }
                        }}
                      />
                    ))
                  }
                </Geographies>
                
                {/* Office Location Markers */}
                {/* Texas, USA - Dallas coordinates */}
                <Marker coordinates={[-96.8, 32.8]}>
                  <g>
                    <circle r={8} fill="#dc2626" className="animate-pulse" stroke="#fff" strokeWidth={2} />
                    <circle r={3} fill="#fff" />
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="text-xs font-bold fill-red-600"
                      style={{ fontSize: '12px' }}
                    >
                      Texas, USA
                    </text>
                  </g>
                </Marker>
                
                {/* The Hague, Netherlands */}
                <Marker coordinates={[4.3, 52.1]}>
                  <g>
                    <circle r={8} fill="#dc2626" className="animate-pulse" stroke="#fff" strokeWidth={2} />
                    <circle r={3} fill="#fff" />
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="text-xs font-bold fill-red-600"
                      style={{ fontSize: '12px' }}
                    >
                      The Hague, Netherlands
                    </text>
                  </g>
                </Marker>
                
                {/* Muscat, Oman */}
                <Marker coordinates={[58.4, 23.6]}>
                  <g>
                    <circle r={8} fill="#dc2626" className="animate-pulse" stroke="#fff" strokeWidth={2} />
                    <circle r={3} fill="#fff" />
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="text-xs font-bold fill-red-600"
                      style={{ fontSize: '12px' }}
                    >
                      Muscat, Oman
                    </text>
                  </g>
                </Marker>
                
                {/* Chennai, India */}
                <Marker coordinates={[80.3, 13.1]}>
                  <g>
                    <circle r={8} fill="#dc2626" className="animate-pulse" stroke="#fff" strokeWidth={2} />
                    <circle r={3} fill="#fff" />
                    <text
                      textAnchor="middle"
                      y={-15}
                      className="text-xs font-bold fill-red-600"
                      style={{ fontSize: '12px' }}
                    >
                      Chennai, India
                    </text>
                  </g>
                </Marker>
              </ComposableMap>
            </div>
          </div>
          
          {/* Office Locations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chennai, India</h3>
              <p className="text-sm text-gray-600">Asia Pacific Operations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Muscat, Oman</h3>
              <p className="text-sm text-gray-600">Middle East Operations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Hague, Netherlands</h3>
              <p className="text-sm text-gray-600">European Operations</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Texas, USA</h3>
              <p className="text-sm text-gray-600">North American Operations</p>
            </div>
          </div>
          
          {/* Global Services */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              We serve a wide variety of industries, including healthcare, financials, infrastructure, and transportation, 
              keeping businesses informed on critical global developments.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Introduction of CSRD in the European Union</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">DEI data tracking and reporting</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Workplace health and safety compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-12">
              TNOVA ESG acts as a digital compass for businesses navigating the complex landscape of sustainability; 
              it provides the clear direction and data-driven insights needed to reach a destination of transparency and resilience.
            </p>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-blue-100 leading-relaxed">
                <strong className="text-white">Important Note:</strong> TNOVA ESG is powered by MindSmithExecutives and, while it provides general 
                information to help businesses achieve a transparent and sustainable future, it is not a financial service 
                provider or law firm and does not offer legal or financial advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}