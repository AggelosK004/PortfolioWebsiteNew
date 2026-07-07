import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ className = '' }) => {
  return (
    <button
      className={`rounded-full border-2 border-[#0C0C0C] text-[#0C0C0C] font-medium uppercase tracking-widest 
        px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base 
        hover:bg-[#0C0C0C]/5 transition-colors ${className}`}
    >
      Live Project
    </button>
  );
};
