'use client'

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { ModernHeroSection } from "@/components/sections/modern-hero-section";
import { CreativeAboutSection } from "@/components/sections/creative-about-section";
import { ModernProjectsSection } from "@/components/sections/modern-projects-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { BlogSection } from "@/components/sections/blog-section";
import { BlogArticlesSection } from "@/components/sections/blog-articles-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GitHubActivitySection } from "@/components/sections/github-activity-section";
import { AIChatbot } from "@/components/ai-chatbot";
import { Menu, X, Download } from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for navbar animation, active section, and progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'projects', 'github', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Professional console message for developers
  useEffect(() => {
    console.log('%cWelcome to Ahmed Attafi\'s Portfolio!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
    console.log('%cHi there, fellow developer! �', 'color: #06b6d4; font-size: 14px; font-weight: 500;');
    console.log('%cThanks for checking out my code. I\'m always open to feedback and collaboration!', 'color: #3b82f6; font-size: 14px;');
    console.log('%cInterested in working together? Let\'s connect: attafiahmed.dev@gmail.com', 'color: #14b8a6; font-size: 14px;');
    console.log('%cFeel free to explore my projects and get in touch! �', 'color: #06b6d4; font-size: 14px; font-style: italic;');
    console.log('%c💻 Happy Coding! - Ahmed Attafi', 'color: #3b82f6; font-size: 16px; font-weight: bold; text-align: center;');
    
    // Create hidden function for developer connection
    (window as any).connect = () => {
      console.clear();
      console.log('🚀 Thanks for your interest! Reach me at: attafiahmed.dev@gmail.com');
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Quick action handlers for CV download (offers ATS and Normal options)
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const downloadNormalCV = () => {
    const link = document.createElement('a');
    link.href = '/Ahmed_Attafi_CV.pdf'; // local CV in public folder
    link.download = 'Ahmed_Attafi_CV.pdf';
    link.click();
    setShowDownloadMenu(false);
  };

  const openATSCV = () => {
    // Open the ATS CV (Google Drive link) in a new tab
    const atsLink = 'https://drive.google.com/file/d/1Oq6NNlOIDiosl7qsie8PS3yOltCHjvFC/view?usp=sharing';
    window.open(atsLink, '_blank', 'noopener,noreferrer');
    setShowDownloadMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowDownloadMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Global gradient background */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Modern Animated Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/70 backdrop-blur-2xl border-b border-blue-200/30 dark:border-blue-800/30 shadow-lg shadow-blue-500/5' 
            : 'bg-background/40 backdrop-blur-xl border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className={`flex items-center transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-4'
          }`}>
            {/* Animated Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.img 
                src="/Attafii.svg" 
                alt="Attafii Logo" 
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-6' : 'h-8'
                }`}
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            {/* Centered Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <motion.nav 
                className="flex items-center gap-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {['about', 'projects', 'github', 'testimonials', 'blog', 'contact'].map((item, index) => {
                  const isActive = activeSection === item;
                  return (
                    <motion.button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 capitalize font-poppins
                                 ${isActive 
                                   ? 'text-blue-600 dark:text-blue-400' 
                                   : 'text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400'
                                 } group`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                    >
                      {/* Text */}
                      <span className="relative z-10">
                        {item}
                      </span>
                      
                      {/* Underline indicator */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300
                                   ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  );
                })}
              </motion.nav>
            </div>

            {/* Right side - Quick Actions & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Quick Actions */}
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Download CV Button */}
                <div className="relative" ref={menuRef}>
                  <motion.button
                    onClick={() => setShowDownloadMenu((s) => !s)}
                    className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-white 
                               bg-transparent hover:bg-blue-600 dark:hover:bg-blue-500
                               border border-blue-200 dark:border-blue-800 hover:border-blue-600 dark:hover:border-blue-500
                               rounded-full transition-all duration-300 font-poppins font-medium
                               backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/25
                               group overflow-hidden flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title="Download CV"
                  >
                    <Download className="w-4 h-4" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      Download CV
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {showDownloadMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                      >
                        <button
                          onClick={openATSCV}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          ATS CV (Google Drive)
                        </button>
                        <button
                          onClick={downloadNormalCV}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20"
                        >
                          Normal CV (PDF)
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Separator */}
                <div className="w-px h-6 bg-border mx-2" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <ThemeToggle />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3 ml-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <ThemeToggle />
              </motion.div>
              
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Menu className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                  )}
                </motion.div>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-teal-500/10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden"
              >
                <motion.div 
                  className="pb-6 pt-4 border-t border-blue-200/20 dark:border-blue-800/20 bg-background/30 backdrop-blur-lg rounded-b-2xl mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex flex-col space-y-1 px-4">
                    {['about', 'projects', 'github', 'testimonials', 'blog', 'contact'].map((item, index) => {
                      const isActive = activeSection === item;
                      return (
                        <motion.button
                          key={item}
                          onClick={() => scrollToSection(item)}
                          className={`relative w-full px-4 py-3 text-sm font-medium transition-all duration-300 capitalize font-poppins
                                     text-left group
                                     ${isActive 
                                       ? 'text-blue-600 dark:text-blue-400' 
                                       : 'text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400'
                                     }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 8 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Text */}
                          <span className="relative z-10">
                            {item}
                          </span>
                          
                          {/* Left border indicator */}
                          <motion.div
                            className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-teal-500 transition-all duration-300
                                       ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Background highlight */}
                          <motion.div
                            className={`absolute inset-0 bg-blue-50 dark:bg-blue-900/10 transition-opacity duration-300
                                       ${isActive ? 'opacity-50' : 'opacity-0 group-hover:opacity-30'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 0.5 : 0 }}
                            whileHover={{ opacity: 0.3 }}
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Real-time Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left shadow-lg"
            animate={{ 
              width: `${scrollProgress}%`,
              boxShadow: scrollProgress > 0 ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
            }}
            transition={{ 
              width: { duration: 0.1, ease: "easeOut" },
              boxShadow: { duration: 0.3 }
            }}
            style={{
              background: `linear-gradient(90deg, 
                #3b82f6 0%, 
                #06b6d4 ${scrollProgress / 2}%, 
                #14b8a6 100%)`
            }}
          />
        </motion.div>
      </motion.nav>

      <main className="relative z-10">
        <section id="hero">
          <ModernHeroSection />
        </section>
        <section id="about">
          <CreativeAboutSection />
        </section>
        <section id="projects">
          <ModernProjectsSection />
        </section>
        <section id="github">
          <GitHubActivitySection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="blog">
          <BlogArticlesSection />
        </section>
        <NewsletterSection />
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
