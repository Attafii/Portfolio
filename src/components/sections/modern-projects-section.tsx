"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Palette, Smartphone, Globe, Database, Cpu, Zap, Star } from "lucide-react";

const projects = [
  {
    id: 1,
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
    id: 2,
    title: "E-Commerce Analytics Dashboard",
    description: "Real-time analytics platform with advanced data visualization, sales forecasting, and automated reporting.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis"],
    category: "Web Development",
    status: "Live",
    featured: true,
    color: "from-green-500 to-teal-600",
    icon: Database,
    metrics: { revenue: "$2M+", accuracy: "94%", reports: "500+" }
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, instant transfers, and expense tracking.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Blockchain", "AI/ML"],
    category: "Mobile Development",
    status: "Development",
    featured: true,
    color: "from-cyan-500 to-blue-600",
    icon: Smartphone,
    metrics: { downloads: "50K+", rating: "4.8★", security: "100%" }
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "Advanced AI-powered content generation platform with natural language processing and creative writing capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI", "Docker"],
    category: "AI/ML",
    status: "Beta",
    featured: false,
    color: "from-teal-500 to-cyan-600",
    icon: Zap,
    metrics: { generated: "1M+", languages: "12", accuracy: "96%" }
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparency, security, and immutability for democratic processes.",
    image: "/api/placeholder/600/400",
    technologies: ["Solidity", "Web3", "React", "IPFS", "MetaMask"],
    category: "Blockchain",
    status: "Live",
    featured: false,
    color: "from-yellow-500 to-red-600",
    icon: Globe,
    metrics: { votes: "25K+", security: "100%", transparency: "Full" }
  },
  {
    id: 6,
    title: "Design System Library",
    description: "Comprehensive design system with reusable components, design tokens, and automated testing for consistent UX.",
    image: "/api/placeholder/600/400",
    technologies: ["Storybook", "Figma", "React", "Sass", "Jest"],
    category: "Design Systems",
    status: "Live",
    featured: false,
    color: "from-teal-500 to-cyan-600",
    icon: Palette,
    metrics: { components: "200+", teams: "15", consistency: "98%" }
  }
];

const categories = ["All", "Desktop Application", "Web Development", "Mobile Development", "AI/ML", "Blockchain", "Design Systems"];

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

  const featuredProjects = projects.filter(project => project.featured);

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

          {/* Featured Projects - Large Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
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
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          onClick={() => project.projectUrl && window.open(project.projectUrl, '_blank')}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                          onClick={() => project.github && window.open(project.github, '_blank')}
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.button>
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
                  <div className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
