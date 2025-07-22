'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Github, 
  Home, 
  Car, 
  Wifi, 
  Database,
  ChevronLeft,
  ChevronRight,
  Play,
  Code
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'IoT Smart Home System',
    category: 'IoT',
    description: 'Complete home automation system with Arduino, sensors, and React dashboard for monitoring and controlling home devices remotely.',
    longDescription: 'A comprehensive IoT solution featuring multiple Arduino-based sensor nodes, real-time data visualization, mobile app integration, and voice control capabilities. The system monitors temperature, humidity, motion, and lighting while providing automated responses and remote control features.',
    image: '/projects/smart-home.jpg',
    technologies: ['Arduino', 'React', 'Firebase', 'Node.js', 'WebSockets', 'ESP32'],
    features: [
      'Real-time sensor monitoring',
      'Mobile app integration',
      'Voice control via Alexa',
      'Energy consumption tracking',
      'Automated lighting system',
      'Security alert system'
    ],
    github: 'https://github.com/Attafii/iot-smart-home',
    demo: 'https://smart-home-demo.vercel.app',
    icon: Home,
    color: 'text-blue-500',
    status: 'Completed'
  },
  {
    id: 2,
    title: 'Automotive Testing Suite',
    category: 'Automotive',
    description: 'Comprehensive C# testing framework for automotive software validation with automated test generation and reporting.',
    longDescription: 'An enterprise-grade testing framework built specifically for automotive software systems. Features automated test case generation, comprehensive reporting, integration with CI/CD pipelines, and support for multiple automotive protocols and standards.',
    image: '/projects/automotive-testing.jpg',
    technologies: ['C#', '.NET', 'Azure DevOps', 'Jenkins', 'XML', 'SQL Server'],
    features: [
      'Automated test generation',
      'Comprehensive reporting',
      'CI/CD integration',
      'Multi-protocol support',
      'Performance benchmarking',
      'Compliance validation'
    ],
    github: 'https://github.com/Attafii/automotive-testing-suite',
    demo: null,
    icon: Car,
    color: 'text-red-500',
    status: 'In Development'
  },
  {
    id: 3,
    title: 'Real-time Sensor Network',
    category: 'IoT',
    description: 'Industrial IoT dashboard for monitoring distributed sensor networks with real-time data visualization and alerting.',
    longDescription: 'A scalable IoT platform designed for industrial environments featuring real-time data collection from multiple sensor types, advanced analytics, predictive maintenance capabilities, and comprehensive alerting systems.',
    image: '/projects/sensor-network.jpg',
    technologies: ['Python', 'InfluxDB', 'Grafana', 'MQTT', 'Docker', 'Kubernetes'],
    features: [
      'Real-time data visualization',
      'Predictive analytics',
      'Custom alerting rules',
      'Historical data analysis',
      'Multi-tenant architecture',
      'API-first design'
    ],
    github: 'https://github.com/Attafii/sensor-network',
    demo: 'https://sensor-network-demo.herokuapp.com',
    icon: Wifi,
    color: 'text-green-500',
    status: 'Completed'
  },
  {
    id: 4,
    title: 'Portfolio Management System',
    category: 'Web Development',
    description: 'Full-stack portfolio management platform with Next.js, Neon database, and comprehensive admin dashboard.',
    longDescription: 'A modern portfolio management system built with Next.js 14, featuring a headless CMS approach, dynamic content management, SEO optimization, and comprehensive analytics. Includes both client-facing portfolio and powerful admin dashboard.',
    image: '/projects/portfolio-system.jpg',
    technologies: ['Next.js', 'TypeScript', 'Neon', 'Prisma', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Dynamic content management',
      'SEO optimization',
      'Performance analytics',
      'Responsive design',
      'Admin dashboard',
      'Email integration'
    ],
    github: 'https://github.com/Attafii/portfolio-system',
    demo: 'https://ahmed-attafi.vercel.app',
    icon: Database,
    color: 'text-purple-500',
    status: 'Active'
  }
]

const categories = ['All', 'IoT', 'Automotive', 'Web Development']

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my most impactful work across IoT, automotive software, and web development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    variants={fadeInUp}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8">
                        <div className="absolute top-4 right-4">
                          <Badge variant={project.status === 'Completed' ? 'default' : project.status === 'Active' ? 'secondary' : 'outline'}>
                            {project.status}
                          </Badge>
                        </div>
                        <div className={`w-16 h-16 ${project.color} bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <Badge variant="outline" className="mb-4">
                          {project.category}
                        </Badge>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 pt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedProject(project.id)}
                            className="flex-1"
                          >
                            <Code className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          {project.github && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.demo && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp} className="text-center mt-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I'm always excited to work on innovative projects that push the boundaries of technology. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="#contact">
                      Get In Touch
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com/Attafii" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View All Projects
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null
                const Icon = project.icon

                return (
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${project.color} bg-muted rounded-xl flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{project.title}</h3>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                      >
                        ✕
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Overview</h4>
                        <p className="text-muted-foreground">{project.longDescription}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        {project.github && (
                          <Button asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.demo && (
                          <Button variant="outline" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Play className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
