"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Coffee, Code, Heart, Briefcase, Star, Zap, Award, Target } from "lucide-react";

const skills = [
  { name: "React & Next.js", color: "from-cyan-400 to-cyan-600" },
  { name: "Python & C/C++", color: "from-purple-400 to-purple-600" },
  { name: "Node.js & Express", color: "from-green-400 to-green-600" },
  { name: "Flutter & Mobile Dev", color: "from-orange-400 to-red-600" },
  { name: "WordPress & Elementor", color: "from-blue-600 to-indigo-600" },
  { name: "Arduino & Raspberry Pi", color: "from-teal-400 to-teal-600" },
  { name: "IoT & Embedded Systems", color: "from-blue-400 to-blue-600" },
  { name: "Azure Cloud & AI", color: "from-blue-500 to-teal-500" },
  { name: "PostgreSQL & MongoDB", color: "from-indigo-400 to-blue-600" }
];

const certifications = [
  { 
    name: "Microsoft Azure AI Fundamentals", 
    issuer: "Microsoft", 
    date: "Jun 2024",
    icon: "🏆"
  },
  { 
    name: "Foundational C# with Microsoft", 
    issuer: "freeCodeCamp", 
    date: "Jul 2024",
    icon: "💻"
  },
  { 
    name: "Introduction to Git and GitHub", 
    issuer: "Google", 
    date: "Jun 2024",
    icon: "🔧"
  },
  { 
    name: "Test Automation Foundations", 
    issuer: "Udemy", 
    date: "Nov 2024",
    icon: "🧪"
  },
  { 
    name: "Introduction to DevOps", 
    issuer: "IBM", 
    date: "Aug 2024",
    icon: "⚙️"
  },
  { 
    name: "Jira Fundamentals", 
    issuer: "Coursera", 
    date: "Nov 2024",
    icon: "📋"
  }
];

const achievements = [
  { icon: Award, title: "Azure AI Certified", desc: "Microsoft Azure AI Fundamentals", color: "text-blue-500" },
  { icon: Target, title: "Full-Stack Developer", desc: "React, Node.js, Flutter", color: "text-teal-500" },
  { icon: Zap, title: "IoT Specialist", desc: "5+ IoT systems deployed", color: "text-cyan-500" },
  { icon: Star, title: "WordPress Expert", desc: "10+ websites delivered", color: "text-orange-500" },
  { icon: Code, title: "DevOps & Git Expert", desc: "CI/CD & Version Control", color: "text-green-500" }
];

const timeline = [
  { year: "2024", title: "Software Quality Engineer", company: "Capgemini Engineering", current: true },
  { year: "2023-2024", title: "Freelance Web Developer", company: "Independent", current: true },
  { year: "2023", title: "IoT System Developer", company: "Smart Kokusai", current: false },
  { year: "2022", title: "Platform Architect", company: "CIN Group", current: false },
  { year: "2021", title: "Computer Engineering Student", company: "ISTIC", current: false }
];

export function CreativeAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-teal-400/20" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ opacity }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">About Me</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Crafting
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent"
              >
                Digital
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent"
              >
                Experiences
              </motion.span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center justify-center gap-3 text-lg text-muted-foreground"
            >
              <MapPin className="w-5 h-5 text-blue-500" />
              <span>Tunisia 🇹🇳</span>
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
              <span>Capgemini Engineering</span>
            </motion.div>
          </motion.div>

          {/* Impressive Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { label: "Projects Delivered", value: "50+", icon: Briefcase, color: "from-blue-500 to-cyan-500" },
              { label: "Client Satisfaction", value: "98%", icon: Star, color: "from-green-500 to-emerald-500" },
              { label: "Code Commits", value: "2000+", icon: Zap, color: "from-purple-500 to-violet-500" },
              { label: "Awards Won", value: "8+", icon: Award, color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="relative bg-gradient-to-br from-white/90 to-blue-50/70 dark:from-gray-800/90 dark:to-blue-950/70 border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Story & Journey */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Personal Story Card */}
              <Card className="group relative overflow-hidden bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-gray-900/80 dark:to-blue-900/20 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-teal-400/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <CardContent className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Heart className="w-6 h-6 text-red-500" />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      My Journey
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I am a passionate and versatile <strong className="text-blue-600 dark:text-blue-400">IoT & Software Developer</strong> with a strong foundation in embedded systems, automotive technologies, and full-stack development. With hands-on experience in both hardware and software domains, I specialize in building intelligent, secure, and user-centric systems that bridge the physical and digital worlds.
                    </p>
                    <p>
                      Currently serving as an <strong className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Automotive Software Tester at Capgemini Engineering</strong>, I develop and execute comprehensive test plans for automotive software systems, focusing on safety, compliance, and performance optimization for next-generation automotive technologies.
                    </p>
                    <p>
                      My work spans across automotive software testing, IoT system architecture, and investment platform development, combining technical depth with a keen eye for design and usability. I thrive in hybrid and collaborative environments, where innovation, problem-solving, and continuous learning are key.
                    </p>
                    <p>
                      🎓 Currently pursuing my <strong className="text-teal-600 dark:text-teal-400">Engineering Degree in Embedded Ambient and Mobile Systems</strong> at ESPRIT (2023-2027), building upon my Bachelor's in Computer Engineering from ISTIC.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="relative bg-gradient-to-br from-blue-50/80 to-teal-50/80 dark:from-blue-900/20 dark:to-teal-900/20 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Career Timeline
                  </h3>
                  <div className="space-y-4">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex items-center gap-4 p-3 rounded-lg ${
                          item.current 
                            ? 'bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800' 
                            : 'hover:bg-gray-50/50 dark:hover:bg-gray-800/30'
                        } transition-all duration-300`}
                      >
                        <div className={`w-3 h-3 rounded-full ${
                          item.current ? 'bg-blue-500' : 'bg-gray-400'
                        } ${item.current ? 'animate-pulse' : ''}`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{item.title}</h4>
                            <span className="text-xs text-muted-foreground">{item.year}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.company}</p>
                        </div>
                        {item.current && (
                          <Badge className="bg-blue-500 text-white">Current</Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { number: "5+", label: "Years Experience", icon: "💼", color: "from-blue-500 to-cyan-500" },
                  { number: "20+", label: "Projects Completed", icon: "🚀", color: "from-green-500 to-teal-500" },
                  { number: "8+", label: "Certifications", icon: "🏆", color: "from-purple-500 to-pink-500" },
                  { number: "4", label: "Programming Languages", icon: "💻", color: "from-orange-500 to-red-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <Card className="h-full text-center p-4 bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm group-hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-2">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                        <motion.div 
                          className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="text-xs text-muted-foreground font-medium leading-tight">{stat.label}</div>
                        
                        {/* Animated background on hover */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Skills & Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Skills with Animated Progress */}
              <Card className="relative bg-gradient-to-br from-teal-50/80 to-cyan-50/80 dark:from-teal-900/20 dark:to-cyan-900/20 border-teal-200/50 dark:border-teal-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Technical Expertise
                  </h3>
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            className={`bg-gradient-to-r ${skill.color} text-white border-none px-3 py-1.5 text-sm font-medium cursor-pointer hover:shadow-lg transition-all duration-300`}
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="h-full relative group cursor-pointer bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <achievement.icon className={`w-8 h-8 mx-auto mb-3 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                        <h4 className="font-semibold mb-1 text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              <Card className="relative bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    🏆 Recent Certifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300">
                          <span className="text-2xl">{cert.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm leading-tight mb-1">{cert.name}</h4>
                            <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">{cert.issuer}</p>
                            <p className="text-xs text-muted-foreground">{cert.date}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Fun Facts */}
              <Card className="relative bg-gradient-to-br from-green-50/80 to-teal-50/80 dark:from-green-900/20 dark:to-teal-900/20 border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    Languages & Interests
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">🇹🇳 Arabic</span>
                      <span className="text-sm text-green-600 font-semibold">Native</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">🇺🇸 English</span>
                      <span className="text-sm text-blue-600 font-semibold">Fluent</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">🇫🇷 French</span>
                      <span className="text-sm text-teal-600 font-semibold">Professional</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">🇩🇪 German</span>
                      <span className="text-sm text-gray-600 font-semibold">Elementary</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                      <Coffee className="w-5 h-5 text-amber-600" />
                      <span className="text-sm">Coffee Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                      <Code className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">Open Source</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                      <span className="text-lg">🚗</span>
                      <span className="text-sm">Automotive Tech</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                      <span className="text-lg">🤖</span>
                      <span className="text-sm">AI & ML</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="inline-block relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Let&apos;s Build Something Amazing Together
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Ready to turn your ideas into reality? I&apos;m always excited to work on innovative projects 
                  that push the boundaries of technology.
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
                        // Pre-fill contact form with "Get In Touch" specific template
                        setTimeout(() => {
                          const subjectField = document.querySelector('input[name="subject"]') as HTMLInputElement;
                          const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                          if (subjectField) subjectField.value = "Getting In Touch - Introduction & Discussion";
                          if (messageField) messageField.value = "Hi Ahmed!\n\nI came across your portfolio and I'm impressed by your work. I'd love to get in touch to introduce myself and discuss potential opportunities.\n\nI'm particularly interested in:\n- Learning more about your expertise\n- Exploring how we might work together\n- Discussing my current needs/projects\n\nLooking forward to connecting with you!\n\nBest regards,";
                          
                          // Trigger change events to update form state
                          const changeEvent = new Event('input', { bubbles: true });
                          if (subjectField) subjectField.dispatchEvent(changeEvent);
                          if (messageField) messageField.dispatchEvent(changeEvent);
                        }, 500);
                      }
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  >
                    Get In Touch
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
