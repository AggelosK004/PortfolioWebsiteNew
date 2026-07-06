import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/LiveProjectButton';

const projects = [
  {
    num: "01",
    client: "React.js / Material-UI",
    name: "CloudView",
    images: {
      leftTop: "/projects/cloudview/desktop-dark.png",
      right: "/projects/cloudview/mobile.png",
      leftBottom: "/projects/cloudview/desktop-light.png"
      
    }
  },
  {
    num: "02",
    client: "NestJS / PostgreSQL",
    name: "To-Do List",
    images: {
      leftTop: "/projects/todolist/login.png",
      leftBottom: "/projects/todolist/register.png",
      right: "/projects/todolist/app.png"
    }
  },
  {
    num: "03",
    client: "React.js / Material-UI",
    name: "Portfolio Website",
    images: {
      leftTop: "/projects/portfolio/contact.png",
      leftBottom: "/projects/portfolio/projects.png",
      right: "/projects/portfolio/hero.png"
    }
  }
];

const ProjectCard = ({ project, i, progress, range, targetScale }: any) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 28}px)` }}
        className="w-full relative flex flex-col gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-black leading-none text-[#D7E2EA]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base font-light">
                {project.client}
              </span>
              <span className="text-[#D7E2EA] uppercase font-medium" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </span>
            </div>
          </div>
          <div className="sm:self-end sm:pb-4 shrink-0">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 h-full">
          {/* Left Column (40%) */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-[40%]">
            <img 
              src={project.images.leftTop} 
              alt={`${project.name} preview 1`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.leftBottom} 
              alt={`${project.name} preview 2`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-full"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          {/* Right Column (60%) */}
          <div className="w-[60%]">
            <img 
              src={project.images.right} 
              alt={`${project.name} full preview`} 
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={40} className="w-full">
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto relative mt-10">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard 
              key={project.num} 
              i={i} 
              project={project} 
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
