'use client'

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ModernHeroSection } from "@/components/sections/modern-hero-section";
import { CreativeAboutSection } from "@/components/sections/creative-about-section";
import { ModernProjectsSection } from "@/components/sections/modern-projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { AIChatbot } from "@/components/ai-chatbot";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global gradient background */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-blue-200/20 dark:border-blue-800/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/Attafii.svg" 
                alt="Attafii Logo" 
                className="h-7 w-auto" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <nav className="flex items-center gap-6">
                <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => scrollToSection('projects')} className="text-sm font-medium hover:text-blue-600 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-sm font-medium hover:text-blue-600 transition-colors">Testimonials</button>
                <button onClick={() => scrollToSection('blog')} className="text-sm font-medium hover:text-blue-600 transition-colors">Blog</button>
                <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</button>
              </nav>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-left px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')} 
                  className="text-left px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="text-left px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        <ModernHeroSection />
        <section id="about">
          <CreativeAboutSection />
        </section>
        <section id="projects">
          <ModernProjectsSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <NewsletterSection />
        <FAQSection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-blue-200/20 dark:border-blue-800/20">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Ahmed Attafi • Made with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
