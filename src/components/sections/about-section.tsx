'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Calendar, Coffee, Code, Heart, Briefcase, GraduationCap, Zap } from 'lucide-react'

const aboutData = {
  stats: [
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "15+", label: "Projects Completed", icon: Briefcase },
    { number: "5+", label: "Technologies Mastered", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: Heart }
  ],
  skills: [
    "React & Next.js", "TypeScript", "Node.js", "Python",
    "IoT Development", "Cloud Architecture", "PostgreSQL", "Docker",
    "AWS", "Microservices", "DevOps", "Agile Development"
  ],
  interests: [
    { name: "IoT Innovation", icon: Zap, description: "Creating smart solutions for tomorrow" },
    { name: "Coffee Brewing", icon: Coffee, description: "Perfect cup, perfect code" },
    { name: "Tech Mentoring", icon: GraduationCap, description: "Sharing knowledge with the community" },
    { name: "Open Source", icon: Code, description: "Contributing to the developer ecosystem" }
  ]
};

export function AboutSection() {
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-light dark:animated-gradient-dark opacity-30" />
      <div className="absolute inset-0 bg-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 float" style={{animationDelay: '1s'}} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 float" style={{animationDelay: '2s'}} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text-purple-pink glow-text">
              About Me
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground mb-8">
              <MapPin className="w-5 h-5" />
              <span>Tunisia 🇹🇳 • Working at Capgemini</span>
            </div>
          </motion.div>

          {/* Introduction Card */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mb-16">
            <Card className="transform-3d rotate-y-6 hover:rotate-y-0 transition-transform duration-500 pulse-glow border-purple-200 dark:border-purple-800 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-center text-muted-foreground">
                  Passionate Software Developer & IoT Specialist from Tunisia, currently working at Capgemini. 
                  I create innovative digital solutions that bridge the gap between technology and human needs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {aboutData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.1 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="transform-3d rotate-3d hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
                    <div className="text-3xl font-bold gradient-text-purple-pink mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Personal Story */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 border-purple-200 dark:border-purple-800 transform-3d rotate-x-6 hover:rotate-x-0 transition-all duration-500">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gradient-text-blue-purple">
                    <Heart className="w-6 h-6 mr-2 text-red-500" />
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Based in <strong className="text-foreground gradient-text-purple-pink">Tunisia 🇹🇳</strong>, I'm a passionate Software Developer 
                      and IoT Specialist with a deep love for creating innovative solutions that bridge the 
                      physical and digital worlds.
                    </p>
                    <p>
                      Currently working as an <strong className="text-foreground gradient-text-blue-purple">Automotive Software QA Engineer @ Capgemini Engineering</strong>, 
                      I specialize in ensuring the highest quality standards for automotive software systems 
                      while pursuing my passion for IoT and full-stack development.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Facts */}
              <Card className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-200 dark:border-pink-800 transform-3d float">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 gradient-text-purple-pink">Fun Facts About Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Coffee className="w-5 h-5 text-brown-500" />
                      <span className="text-sm">Coffee Dependent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Night Owl Coder</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🐛</span>
                      <span className="text-sm">Bug Whisperer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🎮</span>
                      <span className="text-sm">Code Gamer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Current Role */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6 border-l-4 border-l-purple-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transform-3d rotate-y-6 hover:rotate-y-0 transition-all duration-500">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2 gradient-text-blue-purple">Current Role</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    Automotive Software QA Engineer
                  </p>
                  <p className="text-muted-foreground mb-4">
                    @ Capgemini Engineering
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700">Quality Assurance</Badge>
                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">Automotive Software</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800 transform-3d rotate-3d">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 gradient-text-purple-pink">What I Do Best</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Web Development</span>
                      <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200">React • Next.js</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>IoT Systems</span>
                      <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200">Arduino • Raspberry Pi</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cloud Technologies</span>
                      <Badge className="bg-gradient-to-r from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 text-pink-800 dark:text-pink-200">Azure • Firebase</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text-blue-purple">
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {aboutData.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Section */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800 transform-3d rotate-y-6 hover:rotate-y-0 transition-all duration-500">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-6 gradient-text-purple-pink">My Coding Philosophy</h3>
                <div className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-gray-800 dark:to-purple-800 rounded-lg p-6 text-left">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Welcome to Ahmed's coding journey ✨

class Developer {
  constructor() {
    this.name = 'Ahmed Attafi';
    this.location = 'Tunisia 🇹🇳';
    this.passion = 'Building innovative solutions';
    this.coffee = Infinity;
  }

  getCurrentRole() {
    return 'Automotive Software QA Engineer @ Capgemini';
  }

  debugCode() {
    while (this.coffee > 0) {
      this.solveProblem();
      this.coffee--;
    }
    this.brewMoreCoffee();
  }

  collaborate() {
    return 'Always ready for new challenges! 🚀';
  }
}

const ahmed = new Developer();
console.log(ahmed.collaborate());`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Personal Story */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-red-500" />
                    My Journey
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Based in <strong className="text-foreground">Tunisia 🇹🇳</strong>, I'm a passionate Software Developer 
                      and IoT Specialist with a deep love for creating innovative solutions that bridge the 
                      physical and digital worlds.
                    </p>
                    <p>
                      Currently working as an <strong className="text-foreground">Automotive Software QA Engineer @ Capgemini Engineering</strong>, 
                      I specialize in ensuring the highest quality standards for automotive software systems 
                      while pursuing my passion for IoT and full-stack development.
                    </p>
                    <p>
                      My journey in tech started with curiosity about how things work, leading me to explore 
                      everything from Arduino sensors to cloud architectures. I believe in continuous learning 
                      and turning complex problems into elegant solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Fun Facts */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Fun Facts About Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Coffee className="w-5 h-5 text-brown-500" />
                      <span className="text-sm">Coffee Dependent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Code className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Night Owl Coder</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🐛</span>
                      <span className="text-sm">Bug Whisperer</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🎮</span>
                      <span className="text-sm">Code Gamer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Quick Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Tunisia 🇹🇳</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <span>Available for freelance projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Coffee className="w-5 h-5 text-brown-500" />
                      <span>Best commits happen after midnight</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Role */}
              <Card className="p-6 border-l-4 border-l-blue-500">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-2">Current Role</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-2">
                    Automotive Software QA Engineer
                  </p>
                  <p className="text-muted-foreground mb-4">
                    @ Capgemini Engineering
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Quality Assurance</Badge>
                    <Badge variant="secondary">Automotive Software</Badge>
                    <Badge variant="secondary">Test Automation</Badge>
                    <Badge variant="secondary">C#</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">What I Do Best</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Web Development</span>
                      <Badge>React • Next.js</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>IoT Systems</span>
                      <Badge>Arduino • Raspberry Pi</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Cloud Technologies</span>
                      <Badge>Azure • Firebase</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>QA Automation</span>
                      <Badge>C# • Testing Frameworks</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Philosophy Section */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-none">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-6">My Coding Philosophy</h3>
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-6 text-left">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Welcome to Ahmed's coding journey ✨

class Developer {
  constructor() {
    this.name = 'Ahmed Attafi';
    this.location = 'Tunisia 🇹🇳';
    this.passion = 'Building innovative solutions';
    this.coffee = Infinity;
  }

  getCurrentRole() {
    return 'Automotive Software QA Engineer @ Capgemini';
  }

  debugCode() {
    while (this.coffee > 0) {
      this.solveProblem();
      this.coffee--;
    }
    this.brewMoreCoffee();
  }

  collaborate() {
    return 'Always ready for new challenges! 🚀';
  }
}

const ahmed = new Developer();
console.log(ahmed.collaborate());`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
