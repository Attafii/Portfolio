import { ThemeToggle } from "@/components/theme-toggle";
import { ModernHeroSection } from "@/components/sections/modern-hero-section";
import { CreativeAboutSection } from "@/components/sections/creative-about-section";
import { ModernProjectsSection } from "@/components/sections/modern-projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AIChatbot } from "@/components/ai-chatbot";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global gradient background */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-purple-200/20 dark:border-purple-800/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl gradient-text-purple-pink">
              Ahmed Attafi
            </div>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-6">
                <a href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">About</a>
                <a href="#projects" className="text-sm font-medium hover:text-purple-600 transition-colors">Projects</a>
                <a href="#contact" className="text-sm font-medium hover:text-purple-600 transition-colors">Contact</a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <ModernHeroSection />
        <CreativeAboutSection />
        <ModernProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-purple-200/20 dark:border-purple-800/20">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Ahmed Attafi. Crafted with passion and code.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
