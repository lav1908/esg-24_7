import { Gauge } from './gauge';
import { getPerformanceLevel } from '../data/questions';

const generatePDF = (data: ReportData) => {
  // Clone the current report content
  const reportElement = document.querySelector('.bg-white.rounded-lg.shadow-2xl');
  if (!reportElement) return;
  
  const clonedElement = reportElement.cloneNode(true) as HTMLElement;
  
  // Remove the close and generate certificate buttons
  const buttons = clonedElement.querySelectorAll('button');
  buttons.forEach(button => button.remove());
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>ESG Certificate - ${data.companyName}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .bg-gradient-to-r { background: linear-gradient(to right, #0f766e, #0d9488); }
        .bg-amber-900 { background-color: #78350f; }
        .text-amber-100 { color: #fef3c7; }
        .text-white { color: white; }
        .text-gray-900 { color: #111827; }
        .text-gray-700 { color: #374151; }
        .text-gray-600 { color: #4b5563; }
        .text-teal-700 { color: #0f766e; }
        .text-blue-600 { color: #2563eb; }
        .text-green-600 { color: #16a34a; }
        .text-red-600 { color: #dc2626; }
        .text-yellow-600 { color: #ca8a04; }
        .text-purple-600 { color: #9333ea; }
        .bg-white { background-color: white; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-blue-50 { background-color: #eff6ff; }
        .bg-blue-200 { background-color: #bfdbfe; }
        .bg-blue-600 { background-color: #2563eb; }
        .bg-gray-200 { background-color: #e5e7eb; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-t-lg { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; }
        .shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .border { border: 1px solid #e5e7eb; }
        .border-b { border-bottom: 1px solid #e5e7eb; }
        .border-gray-100 { border-color: #f3f4f6; }
        .border-gray-300 { border-color: #d1d5db; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        .p-4 { padding: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .mt-2 { margin-top: 0.5rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-8 { margin-top: 2rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-8 > * + * { margin-top: 2rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-x-4 > * + * { margin-left: 1rem; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .justify-center { justify-content: center; }
        .flex-wrap { flex-wrap: wrap; }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .text-4xl { font-size: 2.25rem; }
        .text-xl { font-size: 1.25rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .text-xs { font-size: 0.75rem; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .font-medium { font-weight: 500; }
        .leading-relaxed { line-height: 1.625; }
        .grid { display: grid !important; }
        .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
        .grid.md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; display: grid !important; }
        .gap-4 { gap: 1rem; }
        .gap-8 { gap: 2rem; }
        .w-full { width: 100%; }
        .max-w-5xl { max-width: 64rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .relative { position: relative; }
        .absolute { position: absolute; }
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        .bottom-12 { bottom: 3rem; }
        .left-1\/2 { left: 50%; }
        .transform { transform: translateX(-50%); }
        .italic { font-style: italic; }
        .overflow-x-auto { overflow-x: auto; }
        .divide-y > * + * { border-top: 1px solid #e5e7eb; }
        .w-96 { width: 24rem; }
        .h-56 { height: 14rem; }
        .inline-block { display: inline-block; }
        .w-48 { width: 12rem; }
        .w-20 { width: 5rem; }
        .h-20 { height: 5rem; }
        .w-16 { width: 4rem; }
        .h-16 { height: 4rem; }
        .w-12 { width: 3rem; }
        .h-12 { height: 3rem; }
        .w-5 { width: 1.25rem; }
        .h-5 { height: 1.25rem; }
        .min-w-0 { min-width: 0; }
        .flex-shrink-0 { flex-shrink: 0; }
        .flex-1 { flex: 1 1 0%; }
        .transform { transform: var(--tw-transform); }
        .-translate-x-1\/2 { --tw-translate-x: -50%; }
        .rotate-0 { --tw-rotate: 0deg; }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-1000 { transition-duration: 1000ms; }
        .prose { color: #374151; max-width: 65ch; }
        .prose-lg { font-size: 1.125rem; line-height: 1.7777778; }
        .max-w-none { max-width: none; }
        .text-justify { text-align: justify; }
        .bg-fecaca { background-color: #fecaca; }
        .bg-fef3c7 { background-color: #fef3c7; }
        .bg-dbeafe { background-color: #dbeafe; }
        .bg-d1fae5 { background-color: #d1fae5; }
        .fill-red-600 { fill: #dc2626; }
        .fill-yellow-600 { fill: #ca8a04; }
        .fill-blue-600 { fill: #2563eb; }
        .fill-green-600 { fill: #16a34a; }
        .stroke-2 { stroke-width: 2; }
        .stroke-4 { stroke-width: 4; }
        .stroke-6 { stroke-width: 6; }
        .stroke-8 { stroke-width: 8; }
        .opacity-90 { opacity: 0.9; }
        .bg-green-100 { background-color: #dcfce7; }
        .text-green-800 { color: #166534; }
        .bg-yellow-100 { background-color: #fef3c7; }
        .text-yellow-800 { color: #92400e; }
        .bg-blue-100 { background-color: #dbeafe; }
        .text-blue-800 { color: #1e40af; }
        .bg-purple-100 { background-color: #f3e8ff; }
        .text-purple-800 { color: #6b21a8; }
        .bg-red-100 { background-color: #fee2e2; }
        .text-red-800 { color: #991b1b; }
        .rounded-full { border-radius: 9999px; }
        .rounded-md { border-radius: 0.375rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-12 { padding-left: 3rem; padding-right: 3rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
        .px-10 { padding-left: 2.5rem; padding-right: 2.5rem; }
        .hover\:bg-gray-100:hover { background-color: #f3f4f6; }
        .hover\:bg-blue-700:hover { background-color: #1d4ed8; }
        .hover\:text-gray-200:hover { color: #e5e7eb; }
        .hover\:shadow-xl:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .hover\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .hover\:scale-105:hover { --tw-scale-x: 1.05; --tw-scale-y: 1.05; }
        .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; display: grid !important; }
        .gap-12 { gap: 3rem; }
        .gap-8 { gap: 2rem; }
        .page-break { page-break-before: always; }
        .pb-6 { padding-bottom: 1.5rem; }
        .pb-8 { padding-bottom: 2rem; }
        .pt-8 { padding-top: 2rem; }
        .pt-6 { padding-top: 1.5rem; }
        .border-t { border-top-width: 1px; }
        .border-l-4 { border-left-width: 4px; }
        .border-teal-600 { border-color: #0d9488; }
        .border-blue-200 { border-color: #bfdbfe; }
        .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
        .my-10 { margin-top: 2.5rem; margin-bottom: 2.5rem; }
        .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
        .mr-2 { margin-right: 0.5rem; }
        .mr-3 { margin-right: 0.75rem; }
        .ml-2 { margin-left: 0.5rem; }
        .ml-3 { margin-left: 0.75rem; }
        .stroke-none { stroke: none; }
        .fill-none { fill: none; }
        .stroke-current { stroke: currentColor; }
        .fill-current { fill: currentColor; }
        .stroke-linecap-round { stroke-linecap: round; }
        .stroke-linejoin-round { stroke-linejoin: round; }
        .viewBox { /* SVG viewBox handled by SVG element */ }
        svg { display: block; }
        circle, path, line, text { vector-effect: non-scaling-stroke; }
        
        .grid.md\:grid-cols-3 { 
          display: grid !important; 
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 2rem !important;
        }
        
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
          .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; display: grid !important; }
        }
        
        @media print {
          @page { 
            size: A4; 
            margin: 0.75in;
            @top-left { content: ''; }
            @top-center { content: ''; }
            @top-right { content: ''; }
            @bottom-left { content: ''; }
            @bottom-center { content: ''; }
            @bottom-right { content: ''; }
          }
          html, body { 
            font-size: 13px !important; 
            line-height: 1.4 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: hidden !important;
          }
          body::before, body::after { display: none !important; }
          .grid { display: grid !important; }
          .md\:grid-cols-3 { 
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important; 
            display: grid !important;
            gap: 1.5rem !important;
          }
          .grid-cols-3 { 
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important; 
            display: grid !important;
            gap: 1.5rem !important;
          }
          .grid.md\:grid-cols-3 { 
            display: grid !important; 
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; color-adjust: exact; }
          * { -webkit-print-color-adjust: exact; color-adjust: exact; }
          .shadow-2xl, .shadow-lg { box-shadow: none !important; }
          svg { -webkit-print-color-adjust: exact; color-adjust: exact; }
          circle, path, line { -webkit-print-color-adjust: exact; color-adjust: exact; }
        }
      </style>
    </head>
    <body>
      ${clonedElement.outerHTML}
    </body>
    </html>
  `;
  
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1000);
  }
};

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

interface ReportProps {
  data: ReportData;
  onClose: () => void;
}

export function Report({ data, onClose }: ReportProps) {
  const maxEnvironmental = 100;
  const maxSocial = 120;
  const maxGovernance = 140;
  const maxTotal = 360;

  const overallPerformance = getPerformanceLevel(data.totalScore, maxTotal);
  const envPerformance = getPerformanceLevel(data.environmentalScore, maxEnvironmental);
  const socialPerformance = getPerformanceLevel(data.socialScore, maxSocial);
  const govPerformance = getPerformanceLevel(data.governanceScore, maxGovernance);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center overflow-y-auto z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full my-8">
        <div className="bg-gradient-to-r from-teal-700 to-teal-600 px-8 py-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <div className="bg-amber-900 text-amber-100 px-6 py-2 rounded-lg">
                  <span className="text-2xl font-bold">ESG24SEVEN</span>
                </div>
              </div>
              <h1 className="text-white text-xl font-semibold mt-2">
                ESG BUSINESS HEALTH CHECK - Self assessment and benchmark of current business performance
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => generatePDF(data)}
                className="bg-white text-teal-700 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors font-medium flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Generate Certificate</span>
              </button>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 text-3xl"
              >
                &times;
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <section className="pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">INTRODUCTION</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Environmental, Social and Governance (ESG) is both a framework and a methodology to improve
              financial and non-financial performance. This criterion captures and critiques all aspects of a
              business beyond business plans and financial reports.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ESG24SEVEN have provided the following free ESG Business Health Check to provide you with a
              better understanding of how prepared your business is for mandatory ESG Reporting. This Business
              Health Check has been developed to give you an automated environmental, Social and Governance
              score that can be used to identify the issues your business should be focusing on over the
              coming years. It is an accessible, independent and highly effective solution.
            </p>
          </section>

          <section className="pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">ESG24SEVEN</h2>
            <p className="text-gray-700 leading-relaxed">
              ESG24SEVEN is the most comprehensive 'consulting-as-a-platform' solution in the market, built
              off decades of ESG consulting experience working with some of the world's leading companies.
              ESG24SEVEN will guide your business and team on how to craft an authentic and genuine ESG
              strategy and report. The ESG sector questions are tailored to ask your team what is material to
              their industry, incorporating 80 unique frameworks, whilst also tracking against your expected
              reporting requirements.
            </p>
          </section>

          <section className="pb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">COMPANY DETAILS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">COMPANY NAME</span>
                <span className="text-gray-900">: {data.companyName}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">INDUSTRY</span>
                <span className="text-gray-900">: {data.companyIndustry}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">CONTACT PERSON</span>
                <span className="text-gray-900">: {data.firstName} {data.lastName}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">MOBILE NUMBER</span>
                <span className="text-gray-900">: {data.mobile}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">EMAIL ADDRESS</span>
                <span className="text-gray-900">: {data.email}</span>
              </div>
              <div className="flex">
                <span className="font-semibold text-gray-700 w-48">COUNTRY</span>
                <span className="text-gray-900">: {data.country}</span>
              </div>
            </div>
          </section>

          <section className="page-break">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ESG HEALTH CHECK PERFORMANCE
            </h2>

            <div className="flex justify-center mb-3">
              <div className="text-center">
                <div className="relative w-64 h-36 mx-auto mb-2">
                  <svg className="w-full h-full" viewBox="0 0 400 240">
                    {/* Outer ring */}
                    <circle cx="200" cy="200" r="140" fill="none" stroke="#f3f4f6" strokeWidth="4" />
                    
                    {/* Low section (Red) - 0 to 45 degrees */}
                    <path
                      d="M 200 200 L 60 200 A 140 140 0 0 1 99 99 Z"
                      fill="#fecaca"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    
                    {/* Medium section (Yellow) - 45 to 90 degrees */}
                    <path
                      d="M 200 200 L 99 99 A 140 140 0 0 1 200 60 Z"
                      fill="#fef3c7"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    
                    {/* Medium High section (Blue) - 90 to 135 degrees */}
                    <path
                      d="M 200 200 L 200 60 A 140 140 0 0 1 301 99 Z"
                      fill="#dbeafe"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    
                    {/* High section (Green) - 135 to 180 degrees */}
                    <path
                      d="M 200 200 L 301 99 A 140 140 0 0 1 340 200 Z"
                      fill="#d1fae5"
                      stroke="#10b981"
                      strokeWidth="2"
                    />
                    
                    {/* Inner circle */}
                    <circle cx="200" cy="200" r="80" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                    
                    {/* Tick marks */}
                    <g stroke="#6b7280" strokeWidth="2">
                      <line x1="60" y1="200" x2="80" y2="200" />
                      <line x1="99" y1="99" x2="113" y2="113" />
                      <line x1="200" y1="60" x2="200" y2="80" />
                      <line x1="301" y1="99" x2="287" y2="113" />
                      <line x1="340" y1="200" x2="320" y2="200" />
                    </g>
                    
                    {/* Needle */}
                    <line
                      x1="200"
                      y1="200"
                      x2="200"
                      y2="90"
                      stroke="#dc2626"
                      strokeWidth="6"
                      strokeLinecap="round"
                      transform={`rotate(${((data.totalScore / maxTotal) * 180) - 90} 200 200)`}
                      className="transition-all duration-1000"
                    />
                    
                    {/* Center dot */}
                    <circle cx="200" cy="200" r="12" fill="#dc2626" />
                    <circle cx="200" cy="200" r="6" fill="white" />
                    
                    {/* Labels */}
                    <text x="40" y="225" textAnchor="middle" className="fill-red-600 text-sm font-bold">Low</text>
                    <text x="85" y="70" textAnchor="middle" className="fill-yellow-600 text-sm font-bold">Medium</text>
                    <text x="315" y="70" textAnchor="middle" className="fill-blue-600 text-sm font-bold">Medium High</text>
                    <text x="360" y="225" textAnchor="middle" className="fill-green-600 text-sm font-bold">High</text>
                  </svg>
                  
                </div>
                
                {/* Total Score Button */}
                <div className="mt-6 mb-4">
                  <div className="bg-blue-600 text-white px-8 py-4 rounded-lg inline-block shadow-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold">{data.totalScore}</div>
                      <div className="text-sm opacity-90">Total Score</div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4 mb-6 text-3xl font-bold text-gray-900">{overallPerformance}</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-8 mb-8">
              <Gauge
                score={data.environmentalScore}
                maxScore={maxEnvironmental}
                label="Environmental"
                performanceLevel={envPerformance}
              />
              <Gauge
                score={data.socialScore}
                maxScore={maxSocial}
                label="Social"
                performanceLevel={socialPerformance}
              />
              <Gauge
                score={data.governanceScore}
                maxScore={maxGovernance}
                label="Governance"
                performanceLevel={govPerformance}
              />
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Performance Levels
              </h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div><span className="font-semibold">High:</span> Good ESG maturity with strategic integration</div>
                <div><span className="font-semibold">Medium High:</span> Fair practices with ongoing improvements</div>
                <div><span className="font-semibold">Medium:</span> ESG efforts with room for development</div>
                <div><span className="font-semibold">Low:</span> Foundational work needed</div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 leading-relaxed">
                ESG24SEVEN offers comprehensive ESG consulting solutions built on decades of experience. 
                Our platform provides in-depth tools, insights, and support to help businesses make smarter, 
                more sustainable decisions and align with leading standards like GRI, SASB, and ISSB.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
