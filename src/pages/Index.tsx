import { Scene3D } from '@/components/ui/Scene3D';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/ui/HeroSection';
import { AboutSection } from '@/components/ui/AboutSection';
import { SkillsSection } from '@/components/ui/SkillsSection';
import { ExperienceSection } from '@/components/ui/ExperienceSection';
import { ProjectsSection } from '@/components/ui/ProjectsSection';
import { ContactSection } from '@/components/ui/ContactSection';
import { Footer } from '@/components/ui/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Scene3D />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;