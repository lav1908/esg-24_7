import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { questions, industries, revenues, employeeCounts, countries, calculateScores } from '../data/questions';

interface AssessmentProps {
  onBack: () => void;
  onShowReport?: (data: any) => void;
}

export function Assessment({ onBack, onShowReport }: AssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    companyName: '',
    companyIndustry: '',
    companyRevenue: '',
    numEmployees: '',
    country: ''
  });
  const [responses, setResponses] = useState<Record<string, string>>({});

  const totalSteps = 2 + questions.length; // Personal info + Company info + Questions

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuestionResponse = (questionId: string, answer: string) => {
    setResponses(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    const scores = calculateScores(responses);
    const reportData = {
      ...formData,
      environmentalScore: scores.environmental,
      socialScore: scores.social,
      governanceScore: scores.governance,
      totalScore: scores.total
    };
    
    if (onShowReport) {
      onShowReport(reportData);
    }
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile *</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderCompanyInfo = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
          <select
            value={formData.companyIndustry}
            onChange={(e) => handleInputChange('companyIndustry', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Annual Revenue *</label>
          <select
            value={formData.companyRevenue}
            onChange={(e) => handleInputChange('companyRevenue', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          >
            <option value="">Select Revenue Range</option>
            {revenues.map((revenue) => (
              <option key={revenue} value={revenue}>{revenue}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees *</label>
          <select
            value={formData.numEmployees}
            onChange={(e) => handleInputChange('numEmployees', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          >
            <option value="">Select Employee Count</option>
            {employeeCounts.map((count) => (
              <option key={count} value={count}>{count}</option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
          <select
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderQuestion = () => {
    const questionIndex = currentStep - 2;
    const question = questions[questionIndex];
    
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-teal-600">
              Question {questionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-500">{question.category}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                responses[question.id] === option
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={responses[question.id] === option}
                  onChange={(e) => handleQuestionResponse(question.id, e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                  responses[question.id] === option
                    ? 'border-teal-500 bg-teal-500'
                    : 'border-gray-300'
                }`}>
                  {responses[question.id] === option && (
                    <CheckCircle className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    );
  };

  const canProceed = () => {
    if (currentStep === 0) {
      return formData.firstName && formData.lastName && formData.email && formData.mobile;
    }
    if (currentStep === 1) {
      return formData.companyName && formData.companyIndustry && formData.companyRevenue && 
             formData.numEmployees && formData.country;
    }
    if (currentStep >= 2) {
      const questionIndex = currentStep - 2;
      const question = questions[questionIndex];
      return responses[question.id];
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Services
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">ESG Assessment</h1>
              <p className="text-gray-600">Step {currentStep + 1} of {totalSteps}</p>
            </div>
            <div className="w-24"></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          {currentStep === 0 && renderPersonalInfo()}
          {currentStep === 1 && renderCompanyInfo()}
          {currentStep >= 2 && renderQuestion()}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  canProceed()
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  canProceed()
                    ? 'bg-teal-600 text-white hover:bg-teal-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Generate Report
                <CheckCircle className="w-5 h-5 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}