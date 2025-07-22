'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Code2, 
  Server, 
  Cpu, 
  Cloud, 
  Database, 
  Wrench,
  Globe,
  Smartphone,
  TestTube,
  GitBranch
} from 'lucide-react'

const skillCategories = {
  frontend: {
    title: 'Frontend Development',
    icon: Globe,
    color: 'text-blue-500',
    skills: [
      { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
      { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
      { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
      { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
      { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
      { name: 'Framer Motion', level: 80, color: 'bg-purple-500' }
    ]
  },
  backend: {
    title: 'Backend Development',
    icon: Server,
    color: 'text-green-500',
    skills: [
      { name: 'Node.js', level: 85, color: 'bg-green-500' },
      { name: 'Python', level: 90, color: 'bg-blue-600' },
      { name: 'C#', level: 88, color: 'bg-purple-600' },
      { name: 'C++', level: 82, color: 'bg-blue-700' },
      { name: 'REST APIs', level: 90, color: 'bg-indigo-500' },
      { name: 'GraphQL', level: 75, color: 'bg-pink-500' }
    ]
  },
  iot: {
    title: 'IoT & Hardware',
    icon: Cpu,
    color: 'text-purple-500',
    skills: [
      { name: 'Arduino', level: 95, color: 'bg-teal-500' },
      { name: 'Raspberry Pi', level: 88, color: 'bg-red-500' },
      { name: 'Sensors Integration', level: 92, color: 'bg-orange-500' },
      { name: 'ESP32/ESP8266', level: 85, color: 'bg-blue-500' },
      { name: 'Circuit Design', level: 80, color: 'bg-green-500' },
      { name: 'Real-time Systems', level: 83, color: 'bg-purple-500' }
    ]
  },
  cloud: {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-cyan-500',
    skills: [
      { name: 'Azure', level: 85, color: 'bg-blue-500' },
      { name: 'Firebase', level: 88, color: 'bg-orange-500' },
      { name: 'Docker', level: 80, color: 'bg-blue-600' },
      { name: 'Jenkins', level: 78, color: 'bg-blue-700' },
      { name: 'Git/GitHub', level: 92, color: 'bg-gray-800' },
      { name: 'CI/CD', level: 82, color: 'bg-green-500' }
    ]
  },
  testing: {
    title: 'QA & Testing',
    icon: TestTube,
    color: 'text-red-500',
    skills: [
      { name: 'Test Automation', level: 90, color: 'bg-red-500' },
      { name: 'Unit Testing', level: 88, color: 'bg-green-500' },
      { name: 'Integration Testing', level: 85, color: 'bg-blue-500' },
      { name: 'Performance Testing', level: 80, color: 'bg-purple-500' },
      { name: 'Automotive Testing', level: 92, color: 'bg-indigo-500' },
      { name: 'Quality Assurance', level: 95, color: 'bg-emerald-500' }
    ]
  },
  mobile: {
    title: 'Mobile & Cross-Platform',
    icon: Smartphone,
    color: 'text-indigo-500',
    skills: [
      { name: 'React Native', level: 75, color: 'bg-blue-500' },
      { name: 'Progressive Web Apps', level: 85, color: 'bg-purple-500' },
      { name: 'Mobile-First Design', level: 88, color: 'bg-pink-500' },
      { name: 'Responsive Design', level: 92, color: 'bg-green-500' },
      { name: 'App Store Deployment', level: 70, color: 'bg-blue-600' },
      { name: 'Cross-Browser Testing', level: 85, color: 'bg-orange-500' }
    ]
  }
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState('frontend')
  const [animatedValues, setAnimatedValues] = useState<{[key: string]: number}>({})

  useEffect(() => {
    const currentSkills = skillCategories[activeTab as keyof typeof skillCategories].skills
    const newValues: {[key: string]: number} = {}
    
    currentSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedValues(prev => ({
          ...prev,
          [skill.name]: skill.level
        }))
      }, index * 100)
    })
  }, [activeTab])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable solutions
            </p>
          </motion.div>

          {/* Skills Overview Cards */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground text-sm">
                  End-to-end web applications with modern frameworks and best practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">IoT Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Smart systems connecting physical devices with cloud platforms
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TestTube className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive testing strategies for automotive and web applications
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Skills */}
          <motion.div variants={fadeInUp}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {Object.entries(skillCategories).map(([key, category]) => {
                  const Icon = category.icon
                  return (
                    <TabsTrigger 
                      key={key} 
                      value={key} 
                      className="flex items-center space-x-2 text-xs lg:text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden lg:inline">{category.title}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>

              <AnimatePresence mode="wait">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <category.icon className={`w-6 h-6 ${category.color}`} />
                            <span>{category.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-6">
                            {category.skills.map((skill, index) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-2"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="font-medium">{skill.name}</span>
                                  <Badge variant="secondary">
                                    {animatedValues[skill.name] || 0}%
                                  </Badge>
                                </div>
                                <Progress 
                                  value={animatedValues[skill.name] || 0} 
                                  className="h-2"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </Tabs>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={fadeInUp} className="mt-12">
            <Card className="p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="flex items-center space-x-3">
                  <Wrench className="w-6 h-6 text-orange-500" />
                  <span>Tools & Technologies I Work With</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-2">
                  {[
                    'VS Code', 'Git', 'Docker', 'Postman', 'Figma', 'Notion',
                    'Jira', 'Confluence', 'Jenkins', 'Azure DevOps', 'Firebase Console',
                    'Arduino IDE', 'PlatformIO', 'Wireshark', 'SolidWorks', 'AutoCAD'
                  ].map((tool) => (
                    <Badge key={tool} variant="outline" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
