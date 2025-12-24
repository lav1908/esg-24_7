import { useState } from 'react';
import { Navigation } from './components/navigation';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Services } from './components/services';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Login } from './components/login';
import { Register } from './components/register';
import { HealthCheckForm } from './components/healthcheckform';
import { Report } from './components/report';
import { AuthProvider, useAuth } from './contexts/AuthContext';

interface ReportData {
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
}

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showHealthCheckForm, setShowHealthCheckForm] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [reportData, setReportData] = useState<ReportData | null>(null);

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleHealthCheckClick = () => {
    if (user) {
      setShowHealthCheckForm(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleShowReport = (data: ReportData) => {
    setReportData(data);
    setShowReport(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navigation
        onLoginClick={handleLoginClick}
        onHealthCheckClick={handleHealthCheckClick}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      
      <div className="pt-16">
        {currentPage === 'home' && <Hero onGetStarted={handleHealthCheckClick} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'services' && (
          <Services onGetAssessment={handleHealthCheckClick} />
        )}
        {currentPage === 'contact' && <Contact />}
      </div>
      
      <Footer />

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Login
            onSwitchToRegister={handleRegisterClick}
            onClose={() => setShowLoginModal(false)}
          />
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Register
            onSwitchToLogin={handleLoginClick}
            onClose={() => setShowRegisterModal(false)}
          />
        </div>
      )}

      {showHealthCheckForm && (
        <HealthCheckForm
          onClose={() => setShowHealthCheckForm(false)}
          onShowReport={handleShowReport}
        />
      )}

      {showReport && reportData && (
        <Report
          data={reportData}
          onClose={() => setShowReport(false)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
