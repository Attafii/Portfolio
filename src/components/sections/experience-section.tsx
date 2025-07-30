"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Software Quality Engineer",
    company: "Capgemini Engineering",
    location: "Ariana, Tunisia",
    period: "Present",
    type: "Full-time",
    description: "Leading software quality assurance initiatives for complex enterprise systems.",
    responsibilities: [
      "Developed and executed comprehensive test plans for enterprise software systems",
      "Created and maintained detailed test cases for performance and functionality validation",
      "Automated testing procedures using industry-standard tools and frameworks",
      "Collaborated with cross-functional teams to ensure quality delivery",
      "Contributed to process improvement initiatives and best practices implementation"
    ],
    technologies: ["Python", "Test Automation", "Jira", "Selenium", "Robot Framework"],
    current: true
  },
  {
    title: "IoT System Developer",
    company: "Smart Kokusai",
    location: "Tunis, Tunisia",
    period: "Feb 2023 - May 2023",
    type: "Contract",
    description: "Built sophisticated IoT systems integrating hardware and software components.",
    responsibilities: [
      "Designed and implemented IoT system using Arduino Uno and Raspberry Pi 3 Model B",
      "Integrated multiple sensors for comprehensive environmental monitoring",
      "Developed real-time data processing using Arduino IDE and MQTT protocols",
      "Created intuitive user interfaces using Flutter for mobile interaction",
      "Implemented data persistence and analytics using MongoDB"
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "Node-RED", "Flutter", "MongoDB"],
    current: false
  },
  {
    title: "Platform Architect",
    company: "CIN Group",
    location: "Tunis, Tunisia",
    period: "Aug 2022 - Jan 2023",
    type: "Full-time",
    description: "Architected and developed secure investment platform with focus on user experience.",
    responsibilities: [
      "Designed and developed secure investment platform architecture",
      "Implemented robust frontend using React and Chakra UI for optimal UX",
      "Built scalable backend services using Express.js and PostgreSQL",
      "Ensured data protection and security compliance measures",
      "Focused on intuitive UI/UX design and user experience optimization"
    ],
    technologies: ["React", "Chakra UI", "Express.js", "PostgreSQL", "Security", "UI/UX"],
    current: false
  }
];

const education = [
  {
    degree: "Engineering Degree in Embedded Ambient and Mobile Systems and Software",
    school: "ESPRIT - Private Higher School of Engineering and Technology",
    period: "2023 - 2027",
    location: "Tunisia",
    status: "In Progress",
    current: true
  },
  {
    degree: "Bachelor's Degree in Computer Engineering",
    school: "ISTIC - Higher Institute of Information and Communication Technologies",
    period: "2021 - 2023",
    location: "Tunisia",
    status: "Completed",
    current: false
  }
];

const certifications = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "Cloud & AI",
    date: "Jun 2024",
    credentialId: "3E03B27E6A4B4EE2"
  },
  {
    name: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    category: "Programming",
    date: "Jul 2024",
    credentialId: "ahmed_attafi-fcswm"
  },
  {
    name: "Introduction to Git and GitHub",
    issuer: "Google",
    category: "Version Control",
    date: "Jun 2024",
    credentialId: "SHEVKUPNHPPL"
  },
  {
    name: "Test Automation Foundations",
    issuer: "Udemy",
    category: "Testing",
    date: "Nov 2024",
    credentialId: "UC-1225b18d-d32c-49f7-8b03-e0cc5300576d"
  },
  {
    name: "Introduction to DevOps",
    issuer: "IBM",
    category: "DevOps",
    date: "Aug 2024",
    credentialId: "OOLLHSCG1JAE"
  },
  {
    name: "Get started with Jira",
    issuer: "Coursera",
    category: "Project Tools",
    date: "Nov 2024",
    credentialId: "J3NI93MNW4I3"
  },
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    category: "Project Management",
    date: "Dec 2023",
    credentialId: "WRG7M9T7NM8F"
  },
  {
    name: "Crash Course on Python",
    issuer: "Google",
    category: "Programming",
    date: "Nov 2023",
    credentialId: "ZUTL7PA9ZRAV"
  }
];

export function ExperienceSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-teal-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-teal-950/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <Building className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Professional Journey</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building expertise across automotive software, IoT systems, and full-stack development through hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-2xl font-bold text-foreground mb-2">
                                {exp.title}
                              </h4>
                              <div className="flex items-center gap-2 mb-2">
                                <Building className="w-4 h-4 text-blue-600" />
                                <span className="text-lg font-semibold text-blue-600">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span>{exp.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <Badge variant={exp.current ? "default" : "secondary"}>
                                  {exp.type}
                                </Badge>
                                {exp.current && (
                                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                    Current
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {exp.description}
                          </p>
                          
                          <div className="mb-6">
                            <h5 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h5>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Education
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="h-full bg-gradient-to-br from-teal-50/80 to-cyan-50/80 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200/50 dark:border-teal-800/50">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-teal-600 dark:text-teal-400 font-semibold mb-2">
                            {edu.school}
                          </p>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant={edu.current ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certifications & Training ({certifications.length})
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <Card className="h-full bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-800/50 cursor-pointer group transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="text-center mb-3">
                        <h4 className="font-semibold text-sm text-foreground mb-2 group-hover:text-purple-600 transition-colors leading-tight min-h-[2.5rem]">
                          {cert.name}
                        </h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex flex-col gap-2 mb-2">
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700 text-xs">
                            {cert.category}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {cert.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground bg-gray-50 dark:bg-gray-800/50 p-2 rounded text-center font-mono break-all">
                        {cert.credentialId}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
