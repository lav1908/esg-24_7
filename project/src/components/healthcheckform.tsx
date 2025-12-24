import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { questions, industries, revenues, employeeCounts, countries, calculateScores } from '../data/questions';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  companyName: string;
  companyIndustry: string;
  companyRevenue: string;
  numEmployees: string;
  country: string;
  responses: Record<string, string>;
}

interface HealthCheckFormProps {
  onClose: () => void;
  onShowReport: (data: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    companyName: string;
    companyIndustry: string;
    companyRevenue: string;
    numEmployees: string;
    country: string;
    environmentalScore: number;
    socialScore: number;
    governanceScore: number;
    totalScore: number;
  }) => void;
}

export function HealthCheckForm({ onClose, onShowReport }: HealthCheckFormProps) {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    mobile: '',
    companyName: '',
    companyIndustry: industries[0],
    companyRevenue: revenues[0],
    numEmployees: employeeCounts[0],
    country: countries[0],
    responses: {}
  });

  const totalSteps = 9 + questions.length;
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const scores = calculateScores(formData.responses);

      const { error: submitError } = await supabase
        .from('health_check_responses')
        .insert({
          user_id: user?.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          company_name: formData.companyName,
          company_industry: formData.companyIndustry,
          company_revenue: formData.companyRevenue,
          num_employees: formData.numEmployees,
          country: formData.country,
          responses: formData.responses,
          environmental_score: scores.environmental,
          social_score: scores.social,
          governance_score: scores.governance,
          total_score: scores.total,
          completed: true
        });

      if (submitError) throw submitError;

      onClose();

      onShowReport({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        mobile: formData.mobile,
        companyName: formData.companyName,
        companyIndustry: formData.companyIndustry,
        companyRevenue: formData.companyRevenue,
        numEmployees: formData.numEmployees,
        country: formData.country,
        environmentalScore: scores.environmental,
        socialScore: scores.social,
        governanceScore: scores.governance,
        totalScore: scores.total
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return formData.firstName && formData.lastName;
    if (currentStep === 1) return formData.email;
    if (currentStep === 2) return formData.mobile;
    if (currentStep === 3) return formData.companyName;
    if (currentStep === 4) return formData.companyIndustry;
    if (currentStep === 5) return formData.companyRevenue;
    if (currentStep === 6) return formData.numEmployees;
    if (currentStep === 7) return formData.country;
    if (currentStep === 8) return true;

    const questionIndex = currentStep - 9;
    return formData.responses[questions[questionIndex].id];
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Name (Required)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
      );
    }

    if (currentStep === 1) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email (Required)</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
      );
    }

    if (currentStep === 2) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile (Required)</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name (Required)</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            required
          />
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Industry (Required)</label>
          <select
            value={formData.companyIndustry}
            onChange={(e) => setFormData({ ...formData, companyIndustry: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Annual Revenue (Required)</label>
          <select
            value={formData.companyRevenue}
            onChange={(e) => setFormData({ ...formData, companyRevenue: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            {revenues.map((revenue) => (
              <option key={revenue} value={revenue}>
                {revenue}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (currentStep === 6) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Employees (Required)</label>
          <select
            value={formData.numEmployees}
            onChange={(e) => setFormData({ ...formData, numEmployees: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            {employeeCounts.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (currentStep === 7) {
      return (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country (Required)</label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (currentStep === 8) {
      return (
        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Begin Assessment</h3>
          <p className="text-gray-700 mb-4">
            You're about to start the ESG health check assessment. This will cover Environmental,
            Social, and Governance questions.
          </p>
          <p className="text-gray-700">
            Please answer each question honestly based on your current business practices.
          </p>
        </div>
      );
    }

    const questionIndex = currentStep - 9;
    const question = questions[questionIndex];

    return (
      <div className="space-y-4">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
            {question.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{question.question}</h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className="flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-teal-500 cursor-pointer transition-all"
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={formData.responses[question.id] === option}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    responses: { ...formData.responses, [question.id]: e.target.value }
                  })
                }
                className="mt-1 mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full my-8">
        <div className="sticky top-0 bg-white border-b px-6 py-4 rounded-t-lg z-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">ESG Health Check</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Step {currentStep + 1} of {totalSteps}</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-teal-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {error}
            </div>
          )}

          {renderStep()}
        </div>

        <div className="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-lg border-t flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          {currentStep === totalSteps - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || loading}
              className="px-8 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex items-center space-x-2 px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
