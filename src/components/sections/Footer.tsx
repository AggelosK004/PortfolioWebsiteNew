import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 overflow-hidden bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]">
      {/* ANIMATED DOTS STRIP */}
      <div className="relative h-[120px] overflow-hidden w-full" aria-hidden="true">
        <div 
          className="absolute left-0 top-1/2 w-[200%] h-[70px] -translate-y-1/2 opacity-60 animate-footerDotsMove"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(215,226,234, 0.45) 1.5px, transparent 2px),
              radial-gradient(circle, rgba(215,226,234, 0.3) 1px, transparent 1.5px),
              radial-gradient(circle, rgba(215,226,234, 0.35) 1.2px, transparent 1.8px)
            `,
            backgroundPosition: '0 8px, 24px 22px, 48px 14px',
            backgroundSize: '72px 38px, 110px 44px, 160px 52px'
          }}
        />
      </div>

      {/* FOOTER INNER */}
      <div className="max-w-[1820px] mx-auto px-5 sm:px-8 md:px-10 pt-16 pb-10 sm:pt-20 sm:pb-12">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Cell 1 (Heading) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <FadeIn delay={0.1} y={30}>
              <h2 className="hero-heading font-black uppercase tracking-tight leading-none text-4xl sm:text-5xl lg:text-6xl max-w-md md:max-w-full">
                BUILDING SCALABLE WEB APPLICATIONS
              </h2>
            </FadeIn>
          </div>

          {/* Nav 1 (Experience & Work) */}
          <div className="col-span-1">
            <FadeIn delay={0.2} y={30} className="flex flex-col items-start gap-4 sm:gap-6">
              <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">Projects</a>
              <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">About</a>
              <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">Services</a>
              <a href="https://github.com/AggelosK004" target="_blank" rel="noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">Open Source</a>
            </FadeIn>
          </div>

          {/* Nav 2 (Socials) */}
          <div className="col-span-1">
            <FadeIn delay={0.3} y={30} className="flex flex-col items-start gap-4 sm:gap-6">
              <a href="https://www.linkedin.com/in/aggelos-kolitsis-72651b296/" target="_blank" rel="noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">LinkedIn</a>
              <a href="https://github.com/AggelosK004" target="_blank" rel="noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">GitHub</a>
              <a href="mailto:aggelosk2004@gmail.com" target="_blank" rel="noreferrer" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base hover:opacity-70 transition-opacity duration-200">Email</a>
            </FadeIn>
          </div>

        </div>

        {/* BRAND ROW */}
        <div className="mt-20 md:mt-32 w-full">
          <FadeIn delay={0.5} y={30}>
            <a href="/" className="flex items-center w-full group">
              <Magnet>
                <div className="w-[60px] sm:w-[80px] md:w-[100px] aspect-square rounded-full bg-[#D7E2EA] relative overflow-hidden mr-4 sm:mr-6 flex-shrink-0">
                  <div 
                    className="absolute -inset-[18%] bg-[#0C0C0C]" 
                    style={{ clipPath: "polygon(0 20%, 100% 8%, 100% 19%, 0 31%, 0 43%, 100% 31%, 100% 42%, 0 54%, 0 66%, 100% 54%, 100% 65%, 0 77%)" }} 
                  />
                </div>
              </Magnet>
              <span className="font-black uppercase leading-[0.8] tracking-tight text-[15vw] sm:text-[16vw] text-[#D7E2EA] whitespace-nowrap flex-1 min-w-0 group-hover:opacity-90 transition-opacity">
                AGGELOS
              </span>
            </a>
          </FadeIn>
        </div>

        {/* LEGAL LINE */}
        <div className="mt-10 pt-6 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm uppercase tracking-wide">
            © 2026 AGGELOS KOLITSIS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[#D7E2EA]/50 font-light text-xs sm:text-sm uppercase tracking-wide">
            DESIGNED & BUILT WITH PASSION.
          </p>
        </div>
      </div>
    </footer>
  );
};
