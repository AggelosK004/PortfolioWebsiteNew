import React from 'react';
import LogoLoop from '../ui/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPostgresql, 
  SiJavascript, 
  SiTailwindcss, 
  SiGithub, 
  SiFigma 
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiGithub />, title: "GitHub" },
  { node: <SiFigma />, title: "Figma" },
];

export const LogoLoopSection: React.FC = () => {
  return (
    <section className="w-full bg-[#0C0C0C] py-16 overflow-hidden">
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0C0C0C"
        ariaLabel="Software and frameworks I use"
        style={{ color: '#D7E2EA' }}
      />
    </section>
  );
};
