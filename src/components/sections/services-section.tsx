"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Layers,
  Globe,
  Cpu,
  Palette,
  Wrench,
  MessageCircle
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
  pricing: {
    label: string;
    price: string;
    period: string;
  };
  deliverables: string[];
  timeline: string;
  category: 'development' | 'design' | 'consulting' | 'maintenance';
  popular?: boolean;
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Full-Stack Web Development",
    description: "Complete web applications with modern technologies, responsive design, and optimal performance.",
    icon: Code,
    features: [
      "Responsive web applications",
      "RESTful API development",
      "Database design & integration",
      "Authentication & security",
      "Real-time features",
      "Performance optimization"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    pricing: {
      label: "Starting from",
      price: "$2,500",
      period: "per project"
    },
    deliverables: [
      "Fully functional web application",
      "Responsive design for all devices",
      "Source code with documentation",
      "Deployment and hosting setup",
      "Basic training and support"
    ],
    timeline: "2-6 weeks",
    category: "development",
    popular: true
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android with excellent user experience.",
    icon: Smartphone,
    features: [
      "Cross-platform development",
      "Native iOS & Android apps",
      "Push notifications",
      "Offline functionality",
      "App store optimization",
      "Analytics integration"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "SQLite"],
    pricing: {
      label: "Starting from",
      price: "$3,500",
      period: "per platform"
    },
    deliverables: [
      "Native mobile application",
      "App store submission",
      "Source code and documentation",
      "Testing on multiple devices",
      "Post-launch support"
    ],
    timeline: "4-8 weeks",
    category: "development"
  },
  {
    id: "iot-solutions",
    title: "IoT Solutions & Integration",
    description: "End-to-end IoT systems with hardware integration, data collection, and real-time monitoring.",
    icon: Cpu,
    features: [
      "Hardware-software integration",
      "Real-time data monitoring",
      "Cloud-based dashboards",
      "Sensor data collection",
      "Automated alerts & reports",
      "Scalable architecture"
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana", "AWS IoT"],
    pricing: {
      label: "Starting from",
      price: "$4,000",
      period: "per solution"
    },
    deliverables: [
      "Complete IoT system setup",
      "Real-time monitoring dashboard",
      "Mobile app for remote control",
      "Documentation and training",
      "6 months technical support"
    ],
    timeline: "6-12 weeks",
    category: "development"
  },
  {
    id: "api-development",
    title: "API Development & Integration",
    description: "Robust REST APIs, third-party integrations, and microservices architecture for scalable systems.",
    icon: Server,
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Third-party integrations",
      "Microservices architecture",
      "API documentation",
      "Rate limiting & security"
    ],
    technologies: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    pricing: {
      label: "Starting from",
      price: "$1,500",
      period: "per API"
    },
    deliverables: [
      "Production-ready API",
      "Comprehensive documentation",
      "Postman collection",
      "Error handling & logging",
      "Performance optimization"
    ],
    timeline: "1-3 weeks",
    category: "development"
  },
  {
    id: "database-design",
    title: "Database Design & Optimization",
    description: "Efficient database architecture, performance optimization, and data migration services.",
    icon: Database,
    features: [
      "Database schema design",
      "Performance optimization",
      "Data migration services",
      "Backup & recovery solutions",
      "Query optimization",
      "Security implementation"
    ],
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    pricing: {
      label: "Starting from",
      price: "$1,200",
      period: "per database"
    },
    deliverables: [
      "Optimized database schema",
      "Migration scripts",
      "Performance analysis report",
      "Backup strategy",
      "Documentation"
    ],
    timeline: "1-2 weeks",
    category: "development"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design with modern interfaces, prototyping, and comprehensive design systems.",
    icon: Palette,
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Modern UI design",
      "Design system creation",
      "Usability testing",
      "Responsive design"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer"],
    pricing: {
      label: "Starting from",
      price: "$1,800",
      period: "per project"
    },
    deliverables: [
      "Complete design mockups",
      "Interactive prototypes",
      "Design system guide",
      "Asset files and exports",
      "Developer handoff"
    ],
    timeline: "2-4 weeks",
    category: "design"
  },
  {
    id: "cloud-deployment",
    title: "Cloud Deployment & DevOps",
    description: "Cloud infrastructure setup, CI/CD pipelines, and automated deployment solutions.",
    icon: Cloud,
    features: [
      "Cloud infrastructure setup",
      "CI/CD pipeline configuration",
      "Automated deployments",
      "Monitoring & logging",
      "Security best practices",
      "Cost optimization"
    ],
    technologies: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform", "Kubernetes"],
    pricing: {
      label: "Starting from",
      price: "$800",
      period: "per setup"
    },
    deliverables: [
      "Production environment setup",
      "CI/CD pipeline",
      "Monitoring dashboard",
      "Deployment documentation",
      "Security configuration"
    ],
    timeline: "1-2 weeks",
    category: "development"
  },
  {
    id: "technical-consulting",
    title: "Technical Consulting",
    description: "Strategic technical guidance, architecture reviews, and technology stack recommendations.",
    icon: MessageCircle,
    features: [
      "Technology stack consultation",
      "Architecture review",
      "Code quality assessment",
      "Performance analysis",
      "Security audit",
      "Scalability planning"
    ],
    technologies: ["Architecture Patterns", "Best Practices", "Code Review", "Documentation"],
    pricing: {
      label: "Starting from",
      price: "$150",
      period: "per hour"
    },
    deliverables: [
      "Detailed assessment report",
      "Recommendations document",
      "Action plan with priorities",
      "Follow-up consultation",
      "Implementation guidance"
    ],
    timeline: "1-2 weeks",
    category: "consulting"
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    description: "Ongoing maintenance, bug fixes, feature updates, and technical support for existing projects.",
    icon: Wrench,
    features: [
      "Bug fixes & patches",
      "Feature enhancements",
      "Security updates",
      "Performance monitoring",
      "Technical support",
      "Regular backups"
    ],
    technologies: ["Monitoring Tools", "Issue Tracking", "Version Control", "Backup Solutions"],
    pricing: {
      label: "Starting from",
      price: "$500",
      period: "per month"
    },
    deliverables: [
      "Monthly maintenance report",
      "Priority bug fixes",
      "Security updates",
      "Performance optimization",
      "24/7 emergency support"
    ],
    timeline: "Ongoing",
    category: "maintenance"
  }
];

const categories = [
  { id: 'all', label: 'All Services', icon: Layers },
  { id: 'development', label: 'Development', icon: Code },
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'consulting', label: 'Consulting', icon: MessageCircle },
  { id: 'maintenance', label: 'Maintenance', icon: Wrench }
];

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-green-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-green-900/20" />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Professional Services</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
              >
                Services &
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 bg-clip-text text-transparent"
              >
                Solutions
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive technical services to bring your ideas to life. From concept to deployment, 
              I provide end-to-end solutions tailored to your specific needs.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                  hoveredService === service.id 
                    ? 'shadow-2xl scale-105 border-blue-300 dark:border-blue-700' 
                    : 'shadow-lg hover:shadow-xl border-gray-200 dark:border-gray-700'
                } ${service.popular ? 'ring-2 ring-blue-500/20' : ''}`}>
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${
                        service.category === 'development' ? 'from-blue-500/20 to-purple-500/20' :
                        service.category === 'design' ? 'from-purple-500/20 to-pink-500/20' :
                        service.category === 'consulting' ? 'from-green-500/20 to-blue-500/20' :
                        'from-orange-500/20 to-red-500/20'
                      }`}>
                        <service.icon className={`w-7 h-7 ${
                          service.category === 'development' ? 'text-blue-600' :
                          service.category === 'design' ? 'text-purple-600' :
                          service.category === 'consulting' ? 'text-green-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-xs text-muted-foreground">{service.pricing.label}</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {service.pricing.price}
                        </span>
                        <span className="text-sm text-muted-foreground">{service.pricing.period}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Timeline: {service.timeline}</div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-300">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-300">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {service.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Don&apos;t see what you&apos;re looking for?
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    I offer custom solutions tailored to your specific needs. Let&apos;s discuss your project 
                    and see how I can help you achieve your goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Discuss Custom Solution
                    </Button>
                    <Button size="lg" variant="outline" className="border-blue-200 dark:border-blue-800">
                      View Portfolio
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
