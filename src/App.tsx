import { HeroSection } from './components/sections/HeroSection';
// import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <main className="w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip min-h-screen">
      <HeroSection />
      {/* <MarqueeSection /> */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}

export default App;
