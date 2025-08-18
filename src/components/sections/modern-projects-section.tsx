"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Palette, Smartphone, Globe, Database, Cpu, Zap, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SmartHome Security - IoT Surveillance System",
    description: "Comprehensive IoT home surveillance system using STM32F407VG microcontroller with multi-sensor integration, real-time monitoring, cloud connectivity, and intelligent alert system for complete home security automation.",
    image: "/api/placeholder/600/400",
    technologies: ["STM32F407VG", "C/C++", "ESP8266", "ThingSpeak IoT", "ADC", "UART", "GPIO", "Embedded Systems"],
    category: "IoT & Embedded Systems",
    status: "Live",
    featured: true,
    color: "from-red-500 to-orange-600",
    icon: Cpu,
    metrics: { sensors: "4", connectivity: "IoT Cloud", monitoring: "24/7" },
    github: "https://github.com/Attafii/SmartHome-Security",
    highlights: [
      "STM32F407VG Microcontroller",
      "Multi-Sensor Integration (Gas, Presence, Smoke)",
      "Real-time ThingSpeak Cloud Integration", 
      "Intelligent Alert System",
      "UART Communication Protocol",
      "ADC for Analog Sensor Reading",
      "Automated LED & Buzzer Control",
      "30-min Gas Alert System"
    ]
  },
  {
    id: 2,
    title: "ArchiFlow - Architecture Office Management",
    description: "Comprehensive Qt-based desktop application for architecture office management with AI integration, mapping services, and modular design for complete business workflow automation.",
    image: "/api/placeholder/600/400",
    technologies: ["Qt 6.x", "C++17", "SQLite", "Groq AI", "Mapbox", "CMake"],
    category: "Desktop Application",
    status: "Live",
    featured: true,
    color: "from-indigo-500 to-purple-600",
    icon: Cpu,
    metrics: { modules: "6", features: "50+", integration: "Full AI" },
    github: "https://github.com/Attafii/Archiflow",
    projectUrl: "/projects/archiflow",
    highlights: ["Employee Management", "Project Tracking", "Contract Management", "Materials Inventory", "Invoice Generation", "AI Assistant"]
  },
  {
    id: 3,
    title: "IntelliConnect - Project Management Dashboard",
    description: "Modern, comprehensive project management dashboard with AI-powered analytics, glassmorphism design, and intelligent insights. Features multilingual chatbot, 3D elements, and advanced data visualization.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline 3D", "Radix UI"],
    category: "Web Development",
    status: "Live",
    featured: true,
    color: "from-blue-500 to-teal-600",
    icon: Zap,
    metrics: { modules: "8", features: "AI-Powered", design: "3D + Glass" },
    github: "https://github.com/Attafii/IntelliConnect",
    highlights: [
      "AI Chatbot Assistant (3 Languages)", 
      "Glassmorphism UI Design", 
      "3D Spline Models Integration", 
      "Document Intelligence", 
      "Real-time Analytics", 
      "Global Search System",
      "Project Timeline Management",
      "Financial Dashboard"
    ]
  },
  {
    id: 4,
    title: "Africa Above - Corporate Website",
    description: "Professional corporate website built with WordPress and Elementor, featuring modern design, responsive layout, and optimized performance for business presence.",
    image: "/api/placeholder/600/400",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL", "CSS3"],
    category: "WordPress Development",
    status: "Live",
    featured: true,
    color: "from-orange-500 to-amber-600",
    icon: Globe,
    metrics: { load: "<2s", responsive: "100%", seo: "A+" },
    liveUrl: "https://africaabove.com",
    highlights: ["Custom Design", "Mobile Optimized", "SEO Friendly", "Fast Loading"]
  },
  {
    id: 5,
    title: "Adams Coffee Co - E-commerce Site",
    description: "Professional coffee e-commerce website with custom design, product showcase, and seamless user experience using WordPress and Elementor.",
    image: "/api/placeholder/600/400",
    technologies: ["WordPress", "WooCommerce", "Elementor", "Payment Gateway"],
    category: "WordPress Development",
    status: "Live",
    featured: true,
    color: "from-amber-600 to-yellow-600",
    icon: Globe,
    metrics: { products: "50+", conversion: "High", mobile: "100%" },
    liveUrl: "https://adamscoffeeco.co.za",
    highlights: ["E-commerce Integration", "Payment Processing", "Product Catalog", "Responsive Design"]
  },
  {
    id: 6,
    title: "Blade Master - Business Website",
    description: "Modern business website showcasing services and company profile with professional design, built using WordPress and Elementor for optimal performance.",
    image: "/api/placeholder/600/400",
    technologies: ["WordPress", "Elementor", "Custom CSS", "Performance Optimization"],
    category: "WordPress Development",
    status: "Live",
    featured: true,
    color: "from-slate-500 to-gray-600",
    icon: Globe,
    metrics: { uptime: "99.9%", speed: "A+", design: "Modern" },
    liveUrl: "https://blademaster.co.za",
    highlights: ["Professional Design", "Service Showcase", "Contact Integration", "Performance Optimized"]
  }
];

const categories = ["All", "IoT & Embedded Systems", "Desktop Application", "Web Development", "WordPress Development"];

export function ModernProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-32 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-900/10 dark:via-teal-900/10 dark:to-cyan-900/10" />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"
          style={{ x, y }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Code className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Featured Work</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, rotateX: 90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Projects
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent"
              >
                & Works
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              A collection of projects that showcase my passion for creating innovative, 
              user-centered digital experiences across various technologies and platforms.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Filtered Projects - Large Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              {selectedCategory === "All" ? "All Projects" : selectedCategory}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <Card className="h-full relative overflow-hidden bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="w-16 h-16 text-white" />
                      </div>
                      
                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Live Site Button */}
                        {(project.liveUrl || project.projectUrl) && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                            onClick={() => {
                              const url = project.liveUrl || project.projectUrl;
                              if (url) window.open(url, '_blank');
                            }}
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </motion.button>
                        )}
                        
                        {/* GitHub Button */}
                        {project.github && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                            onClick={() => project.github && window.open(project.github, '_blank')}
                          >
                            <Github className="w-5 h-5 text-white" />
                          </motion.button>
                        )}
                      </motion.div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge 
                          className={`${
                            project.status === 'Live' 
                              ? 'bg-green-500 text-white' 
                              : project.status === 'Development'
                              ? 'bg-blue-500 text-white'
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-3">
                        <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg">
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            <div className="font-semibold text-sm">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <Card className="inline-block relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <Star className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Have a Project in Mind?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  I am always excited to work on new challenges and bring innovative ideas to life. 
                  Let us discuss your next project!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <div 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                        // Pre-fill contact form with "Start a Project" specific template
                        setTimeout(() => {
                          const subjectField = document.querySelector('input[name="subject"]') as HTMLInputElement;
                          const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                          if (subjectField) subjectField.value = "New Project Inquiry - Let's Start Building";
                          if (messageField) messageField.value = "Hi Ahmed!\n\nI have a project in mind and I'd love to work with you to bring it to life.\n\nProject Details:\n- Type of project: [Please describe - web app, mobile app, IoT solution, etc.]\n- Timeline: [Your preferred timeline]\n- Budget range: [Your budget expectations]\n- Key features needed: [Main functionality required]\n\nI'm excited about the possibility of working together and would love to discuss this project in more detail.\n\nBest regards,";
                          
                          // Trigger change events to update form state
                          const changeEvent = new Event('input', { bubbles: true });
                          if (subjectField) subjectField.dispatchEvent(changeEvent);
                          if (messageField) messageField.dispatchEvent(changeEvent);
                        }, 500);
                      }
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  >
                    Start a Project
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
