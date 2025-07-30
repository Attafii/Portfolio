"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Download, Star, Users, Code, Database, Cpu, Settings, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ArchiFlowProject() {
  const features = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete employee database with role management, contact information, and performance tracking."
    },
    {
      icon: FileText,
      title: "Project Tracking",
      description: "Comprehensive project lifecycle management from initial concept to final delivery."
    },
    {
      icon: Settings,
      title: "Contract Management",
      description: "Digital contract creation, modification, and status tracking with automated workflows."
    },
    {
      icon: Database,
      title: "Materials Inventory",
      description: "Real-time inventory management with supplier integration and cost analysis."
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description: "Automated invoice creation with customizable templates and payment tracking."
    },
    {
      icon: Cpu,
      title: "AI Assistant",
      description: "Groq AI integration for intelligent recommendations and automated decision support."
    }
  ];

  const techSpecs = [
    { category: "Framework", items: ["Qt 6.x", "C++17"] },
    { category: "Database", items: ["SQLite", "Custom Schema"] },
    { category: "AI Integration", items: ["Groq AI API", "Natural Language Processing"] },
    { category: "Mapping", items: ["Mapbox Integration", "Location Services"] },
    { category: "Build System", items: ["CMake", "Cross-platform"] },
    { category: "Architecture", items: ["Modular Design", "Plugin System"] }
  ];

  const screenshots = [
    {
      title: "Main Dashboard",
      description: "Overview of all active projects and key metrics",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Employee Management",
      description: "Comprehensive employee database and role management",
      image: "/api/placeholder/800/500"
    },
    {
      title: "Project Tracking",
      description: "Real-time project progress and milestone tracking",
      image: "/api/placeholder/800/500"
    },
    {
      title: "AI Assistant",
      description: "Intelligent recommendations and automated insights",
      image: "/api/placeholder/800/500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/#projects">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                ArchiFlow
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Architecture Office Management System
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-green-500 text-white">Live</Badge>
                <Badge variant="outline">Desktop Application</Badge>
                <Badge variant="outline">Qt 6.x</Badge>
                <Badge variant="outline">C++17</Badge>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <a href="https://github.com/Attafii/Archiflow" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/Attafii/Archiflow/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="overflow-hidden">
            <div className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <Cpu className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">ArchiFlow Dashboard</h3>
                <p className="text-lg opacity-90">Complete Architecture Office Management</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">About ArchiFlow</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      ArchiFlow is a comprehensive desktop application designed specifically for architecture offices 
                      to streamline their business operations. Built with Qt 6.x and modern C++17, it provides a 
                      robust, cross-platform solution for managing all aspects of an architectural practice.
                    </p>
                    <p>
                      The application features a modular plugin-based architecture, allowing for easy customization 
                      and extensibility. With integrated AI assistance powered by Groq AI and advanced mapping 
                      services through Mapbox, ArchiFlow represents the cutting edge of architectural office management.
                    </p>
                    <p>
                      From employee management to project tracking, contract handling to materials inventory, 
                      ArchiFlow provides a unified platform that reduces complexity and increases efficiency 
                      for architectural firms of all sizes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Modules</span>
                      <span className="font-semibold">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Features</span>
                      <span className="font-semibold">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">AI Integration</span>
                      <span className="font-semibold">Full</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform</span>
                      <span className="font-semibold">Cross-platform</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Repository Stats</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm">Stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">C++/Qt</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                        <feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technical Specifications */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techSpecs.map((spec, index) => (
                  <div key={spec.category}>
                    <h3 className="font-semibold mb-3 text-indigo-600 dark:text-indigo-400">
                      {spec.category}
                    </h3>
                    <div className="space-y-2">
                      {spec.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Screenshots */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Application Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Database className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Screenshot Coming Soon</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{screenshot.title}</h3>
                    <p className="text-sm text-muted-foreground">{screenshot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-indigo-200 dark:border-indigo-800">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Interested in ArchiFlow?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore the source code, contribute to the project, or download the latest release 
                to see how ArchiFlow can transform your architecture office management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <a href="https://github.com/Attafii/Archiflow" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/Attafii/Archiflow/releases" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download Latest
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#contact">
                    Contact Developer
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
