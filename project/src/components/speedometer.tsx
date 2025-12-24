interface SpeedometerProps {
  score: number;
  maxScore: number;
  label: string;
  color: string;
}

export function Speedometer({ score, maxScore, label, color }: SpeedometerProps) {
  const percentage = (score / maxScore) * 100;
  const angle = (percentage / 100) * 180 - 90; // -90 to 90 degrees

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-24 mb-4">
        {/* Background arc */}
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
            className="transition-all duration-1000"
          />
          {/* Needle */}
          <line
            x1="100"
            y1="80"
            x2="100"
            y2="30"
            stroke="#374151"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 100 80)`}
            className="transition-all duration-1000"
          />
          {/* Center dot */}
          <circle cx="100" cy="80" r="6" fill="#374151" />
        </svg>
        
        {/* Score display */}
        <div className="absolute inset-0 flex items-end justify-center pb-2">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{score}</div>
            <div className="text-sm text-gray-500">/ {maxScore}</div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{label}</h3>
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
          percentage >= 80 ? 'bg-green-100 text-green-800' :
          percentage >= 60 ? 'bg-blue-100 text-blue-800' :
          percentage >= 40 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {percentage >= 80 ? 'Excellent' :
           percentage >= 60 ? 'Good' :
           percentage >= 40 ? 'Fair' : 'Needs Improvement'}
        </div>
      </div>
    </div>
  );
}