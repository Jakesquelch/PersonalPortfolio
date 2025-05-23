import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-darker dark:bg-darker text-white dark:text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-12 bg-darker dark:bg-darker border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-electric to-purple bg-clip-text text-transparent">
                Jake Squelch
              </span>
              <p className="text-gray-400 mt-2">Computer Science Student & Aspiring Software Engineer</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-gray-400 hover:text-electric transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-400 hover:text-electric transition-colors duration-300">About</a>
              <a href="#projects" className="text-gray-400 hover:text-electric transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-electric transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Jake Squelch. Built with passion and modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
