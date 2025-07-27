"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Coffee, Code, Heart, Briefcase, Star, Zap, Award, Target } from "lucide-react";

const skills = [
  { name: "React & Next.js", level: 95, color: "from-blue-400 to-blue-600" },
  { name: "TypeScript", level: 90, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", level: 85, color: "from-teal-400 to-teal-600" },
  { name: "IoT Development", level: 88, color: "from-green-400 to-green-600" },
  { name: "Cloud Architecture", level: 82, color: "from-blue-500 to-teal-500" },
  { name: "PostgreSQL", level: 87, color: "from-indigo-400 to-blue-600" }
];

const achievements = [
  { icon: Award, title: "Top Performer", desc: "Capgemini Excellence Award 2024", color: "text-blue-500" },
  { icon: Target, title: "Project Success", desc: "100% client satisfaction rate", color: "text-teal-500" },
  { icon: Zap, title: "Innovation", desc: "5+ IoT solutions deployed", color: "text-cyan-500" },
  { icon: Star, title: "Recognition", desc: "Featured in tech publications", color: "text-green-500" }
];

const timeline = [
  { year: "2024", title: "Senior QA Engineer", company: "Capgemini", current: true },
  { year: "2023", title: "IoT Specialist", company: "Tech Solutions", current: false },
  { year: "2022", title: "Full Stack Developer", company: "StartUp Inc", current: false },
  { year: "2021", title: "Junior Developer", company: "Dev Agency", current: false }
];

export function CreativeAboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
                      Born and raised in <strong className="text-blue-600 dark:text-blue-400">Tunisia 🇹🇳</strong>, 
                      I discovered my passion for technology early on. What started as curiosity about how things work 
                      evolved into a deep love for creating digital solutions that make a real impact.
                    </p>
                    <p>
                      Currently serving as an <strong className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Automotive Software QA Engineer at Capgemini Engineering</strong>, I ensure the highest quality 
                      standards for next-generation automotive software while pursuing my passion for IoT and full-stack development.
                    </p>
                    <p>
                      My unique blend of QA expertise, development skills, and IoT knowledge positions me to bridge 
                      the gap between robust software quality and innovative technical solutions.
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
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
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

              {/* Fun Facts */}
              <Card className="relative bg-gradient-to-br from-green-50/80 to-teal-50/80 dark:from-green-900/20 dark:to-teal-900/20 border-green-200/50 dark:border-green-800/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    When I&apos;m Not Coding
                  </h3>
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
                      <span className="text-lg">🎮</span>
                      <span className="text-sm">Gaming</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50">
                      <span className="text-lg">📚</span>
                      <span className="text-sm">Tech Blogs</span>
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
                  <div className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-semibold cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
