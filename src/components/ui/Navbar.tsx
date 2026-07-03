import React from 'react';
import { FadeIn } from './FadeIn';

export const Navbar: React.FC = () => {
  return (
    <FadeIn 
      as="nav" 
      delay={0} 
      y={-20} 
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 md:py-6 z-50 bg-[#0C0C0C]/40 backdrop-blur-md shadow-lg"
    >
      <div className="flex justify-between items-center w-full max-w-[1820px] mx-auto">
        {['About', 'Price', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </FadeIn>
  );
};
