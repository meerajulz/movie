import React from 'react';

interface RatingCircleProps {
  score: number;
  maxScore: number;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ score, maxScore }) => {
  const scorePercentage = Math.round((score / maxScore) * 1);

  const getColor = (score: number) => {
    if (score < 30) {
      return 'text-red-400';
    } else if (score < 70) {
      return 'text-yellow-400';
    } else {
      return 'text-green-400';
    }
  }
  
  const colorScore = getColor(scorePercentage);

  return (
    <div className=" bg-black border-2 border-gray-800 rounded-full">
      <div className="relative flex items-center justify-center w-12 h-12">
        <svg
          className="absolute top-0 left-0 w-full h-full transform -rotate-90"
          viewBox="0 0 36 36"
        >
          <path
            className="text-gray-300"
            fill="none"
            strokeWidth="3.5"
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`${colorScore} stroke-current`}
            fill="none"
            strokeLinecap="round"
            strokeWidth="3.5"
            strokeDasharray={`${scorePercentage}, 100`}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="text-14px text-white">
          {scorePercentage}%
        </span>
      </div>
    </div>
  );
};

export default RatingCircle;
