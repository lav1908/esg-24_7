import { useState } from 'react';
import { X, CheckCircle, Calendar } from 'lucide-react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartAssessment: () => void;
}

export function AssessmentModal({ isOpen, onClose, onStartAssessment }: AssessmentModalProps) {
  const [activeTab, setActiveTab] = useState<'assessment' | 'demo'>('assessment');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Get Started with TNOVA ESG</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('assessment')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'assessment'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Free ESG Assessment
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
              activeTab === 'demo'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Request Demo
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'assessment' ? (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Complete Your Free ESG Health Check
                </h3>
                <p className="text-gray-600 mb-6">
                  Get a comprehensive assessment of your organization's ESG readiness with our 45-question evaluation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Environmental impact assessment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Social responsibility evaluation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Governance framework review
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Detailed scoring report
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Assessment Details:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>⏱️ Takes 15-20 minutes</li>
                    <li>📊 45 comprehensive questions</li>
                    <li>🎯 Instant results</li>
                    <li>💰 Completely Free</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>No credit card required.</strong> Get instant results and actionable recommendations to improve your ESG performance.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onStartAssessment();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Free Assessment Now
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Schedule a Personalized Demo
                </h3>
                <p className="text-gray-600 mb-6">
                  See how TNOVA ESG can transform your sustainability reporting and compliance management.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Demo Includes:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      Platform walkthrough
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      Custom use case scenarios
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      Reporting capabilities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      Q&A with ESG experts
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>🕐 30-45 minute session</li>
                    <li>👥 1-on-1 with ESG specialist</li>
                    <li>📈 Tailored to your industry</li>
                    <li>💡 Implementation guidance</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <p className="text-sm text-purple-800">
                  <strong>Coming Soon!</strong> Our demo scheduling system is currently being finalized. 
                  Please start with the free assessment to get immediate insights.
                </p>
              </div>

              <button
                disabled
                className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-xl font-semibold text-lg cursor-not-allowed"
              >
                Demo Scheduling Coming Soon
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}