import React from 'react';
import { FadeIn } from '../ui/FadeIn';

const experiences = [
  {
    num: "01",
    organization: "Metatopia",
    role: "Full-Stack Developer Intern",
    date: "Mar 2026 — May 2026",
    desc: "Developed backend infrastructure using C# and SQL Server, and built responsive frontend interfaces with React and TypeScript. Led a full frontend architecture refactor for maintainability, built REST APIs, and used Orval-generated OpenAPI clients to improve frontend-backend alignment."
  },
  {
    num: "02",
    organization: "Open Source Team UoM",
    role: "Open Source Contributor",
    date: "Oct 2025 — Present",
    desc: "Contributed to open-source university projects, collaborating with peers on development and deployment tasks. Managed version control using Git-based team workflows, handling branching, merging, and pull requests while gaining hands-on experience with modern web technologies."
  },
  {
    num: "03",
    organization: "University of Macedonia",
    role: "B.Sc. Applied Informatics – Computer Science",
    date: "Oct 2022 — Present",
    desc: "Currently pursuing a Bachelor of Science degree in Applied Informatics with a specialization in Computer Science. Building a strong foundation in software engineering, algorithms, and advanced programming principles."
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 text-[#D7E2EA]">
      <FadeIn delay={0} y={40} className="w-full">
        <h2 className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {experiences.map((exp, i) => (
          <FadeIn 
            key={exp.num} 
            delay={i * 0.1} 
            y={30} 
            className="flex flex-col md:flex-row md:items-start border-t border-[#D7E2EA]/15 py-8 sm:py-10 md:py-12 gap-6 md:gap-16 lg:gap-32"
          >
            <div className="font-black leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {exp.num}
            </div>
            <div className="flex flex-col gap-3 md:gap-6 pt-2 md:pt-4">
              <div>
                <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {exp.organization}
                </h3>
                <span className="text-[#D7E2EA]/70 font-medium text-sm sm:text-base uppercase tracking-wider block mt-2">
                  {exp.role} • {exp.date}
                </span>
              </div>
              <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                {exp.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
