import React from 'react';
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Frontend Development",
    desc: "Building scalable and responsive interfaces with React, Next.js, and TypeScript, focusing on UI/UX implementation."
  },
  {
    num: "02",
    name: "Backend Infrastructure",
    desc: "Developing robust backend services and APIs using C#, NestJS, and integrating databases like SQL Server and PostgreSQL."
  },
  {
    num: "03",
    name: "API Integration",
    desc: "Connecting systems using REST APIs and Orval-generated OpenAPI clients to improve frontend-backend alignment."
  },
 
  {
    num: "04",
    name: "Architecture & Design",
    desc: "Focusing on clean architecture, maintainable code, and delivering practical solutions from concept to deployment."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 text-[#0C0C0C]">
      <FadeIn delay={0} y={40} className="w-full">
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.num} 
            delay={i * 0.1} 
            y={30} 
            className="flex flex-col md:flex-row md:items-start border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-6 md:gap-16 lg:gap-32"
          >
            <div className="font-black leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {service.num}
            </div>
            <div className="flex flex-col gap-3 md:gap-6 pt-2 md:pt-4">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
