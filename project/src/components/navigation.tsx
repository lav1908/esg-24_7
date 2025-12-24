import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavigationProps {
  onLoginClick: () => void;
  onHealthCheckClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onLoginClick, onHealthCheckClick, onNavigate, currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/src/data/Tnova image.png" 
              alt="TNOVA ESG" 
              className="h-8"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`transition-colors font-medium ${
                  currentPage === item.page
                    ? 'text-teal-600 border-b-2 border-teal-600 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={onHealthCheckClick}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Assessment
                </button>
                <button
                  onClick={signOut}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                  <User size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-teal-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            {user ? (
              <>
                <button
                  onClick={() => {
                    onHealthCheckClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                  Assessment
                </button>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-gray-600 hover:text-gray-900 py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  onLoginClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
