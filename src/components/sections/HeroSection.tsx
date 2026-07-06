import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
import { Navbar } from '../ui/Navbar';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-between overflow-x-clip relative">
      <Navbar />
      {/* Placeholder to maintain flex layout since Navbar is fixed */}
      <div className="px-6 md:px-10 pt-6 md:pt-8 opacity-0 pointer-events-none" aria-hidden="true">
        <div className="text-sm md:text-lg lg:text-[1.4rem]">&nbsp;</div>
      </div>

      {/* Hero Heading */}
      <div className="overflow-hidden flex-1 flex items-center justify-center -mt-10 sm:-mt-10 md:-mt-16 z-20 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[12vw]">
            Hi, i&apos;m aggelos
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0 px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a full stack developer driven by building scalable web applications
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>

    </section>
  );
};
