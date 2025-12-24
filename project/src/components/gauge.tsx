interface GaugeProps {
  score: number;
  maxScore: number;
  size?: 'large' | 'small';
  label?: string;
  performanceLevel?: string;
}

export function Gauge({ score, maxScore, size = 'small', label, performanceLevel }: GaugeProps) {
  const percentage = (score / maxScore) * 100;
  const isLarge = size === 'large';
  const radius = isLarge ? 120 : 50;
  const strokeWidth = isLarge ? 24 : 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * Math.PI;

  const getColor = () => {
    if (percentage >= 75) return '#10b981';
    if (percentage >= 60) return '#3b82f6';
    if (percentage >= 40) return '#f59e0b';
    return '#ef4444';
  };

  const getSegmentColor = (segment: number) => {
    const segmentPercentage = (segment / 4) * 100;
    if (percentage >= segmentPercentage) {
      if (segmentPercentage >= 75) return '#10b981';
      if (segmentPercentage >= 50) return '#3b82f6';
      if (segmentPercentage >= 25) return '#f59e0b';
      return '#ef4444';
    }
    return '#e5e7eb';
  };

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={`${circumference} ${circumference}`}
          />

          {[0, 1, 2, 3].map((segment) => {
            const segmentLength = circumference / 4;
            const segmentOffset = circumference - (segment * segmentLength);
            return (
              <circle
                key={segment}
                stroke={getSegmentColor(segment + 1)}
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={`${segmentLength * 0.95} ${circumference}`}
                strokeDashoffset={segmentOffset}
                className="transition-all duration-1000"
              />
            );
          })}

          <circle
            stroke={getColor()}
            fill="transparent"
            strokeWidth={strokeWidth + 2}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
            style={{ opacity: 0.8 }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-bold ${isLarge ? 'text-5xl' : 'text-2xl'} text-gray-900`}>
            {score}
          </span>
        </div>
      </div>

      {label && (
        <div className="mt-4 text-center">
          <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
            label === 'Environmental' ? 'bg-green-100 text-green-800' :
            label === 'Social' ? 'bg-yellow-100 text-yellow-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {label}
          </div>
          {performanceLevel && (
            <p className="mt-2 text-sm font-semibold text-gray-700">{performanceLevel}</p>
          )}
        </div>
      )}
    </div>
  );
}
