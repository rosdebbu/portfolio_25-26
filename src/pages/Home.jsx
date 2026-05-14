import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { ResumeSection } from "../components/ResumeSection";
import { BlogSection } from "../components/BlogSection";
import { Footer } from "../components/Footer";
import { useState, useCallback } from "react";

const sections = {
  home: HeroSection,
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  resume: ResumeSection,
  blog: BlogSection,
  contact: ContactSection,
};

export const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
  }, []);

  // Get the active component
  const ActiveComponent = sections[activeSection];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Content — only the active section is shown */}
      <main className="section-view">
        <div key={activeSection} className="section-animate">
          <ActiveComponent onNavClick={handleNavClick} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
