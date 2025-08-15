'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Trophy, 
  FileCheck, 
  Star,
  Target,
  CheckCircle,
  Medal,
  Shield
} from 'lucide-react'

const achievements = [
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    type: "certification",
    icon: Shield,
    color: "from-orange-500 to-red-500",
    verified: true
  },
  {
    title: "IoT Excellence Award",
    issuer: "Tunisia Tech Innovation",
    date: "2023",
    type: "award",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    verified: true
  },
  {
    title: "Full-Stack JavaScript Certification",
    issuer: "freeCodeCamp",
    date: "2023",
    type: "certification",
    icon: FileCheck,
    color: "from-green-500 to-teal-500",
    verified: true
  },
  {
    title: "Best Mobile App - Fitness Category",
    issuer: "App Store Awards",
    date: "2024",
    type: "award",
    icon: Medal,
    color: "from-blue-500 to-purple-500",
    verified: true
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    type: "certification",
    icon: Shield,
    color: "from-blue-400 to-blue-600",
    verified: true
  },
  {
    title: "Top Contributor - Open Source",
    issuer: "GitHub",
    date: "2024",
    type: "recognition",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    verified: true
  }
]

const stats = [
  {
    label: "Projects Completed",
    value: "50+",
    icon: Target,
    color: "from-blue-500 to-cyan-500"
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500"
  },
  {
    label: "Years Experience",
    value: "5+",
    icon: Award,
    color: "from-purple-500 to-violet-500"
  },
  {
    label: "Technologies Mastered",
    value: "25+",
    icon: Star,
    color: "from-orange-500 to-red-500"
  }
]

export function AchievementsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50/50 via-blue-50/30 to-teal-50/30 dark:from-gray-900/50 dark:via-blue-950/30 dark:to-teal-950/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-blue-50/30 to-teal-50/30 dark:from-gray-900/10 dark:via-blue-900/10 dark:to-teal-900/10" />
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Achievements &{' '}
              <span className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications, awards, and milestones that showcase expertise and commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gradient-to-br from-white/80 to-blue-50/50 dark:from-gray-800/80 dark:to-blue-950/50 border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color}/20 rounded-xl flex items-center justify-center`}>
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
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={`${achievement.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-gradient-to-br from-white/90 to-blue-50/70 dark:from-gray-800/90 dark:to-blue-950/70 border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      {achievement.verified && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      <Badge 
                        variant="outline" 
                        className={`bg-gradient-to-r ${achievement.color}/10 border-blue-300/30 dark:border-blue-700/30 text-xs`}
                      >
                        {achievement.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {achievement.issuer}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {achievement.date}
                    </span>
                    {achievement.verified && (
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                </CardContent>
                
                {/* Hover effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color}/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Ready to Create Excellence Together?
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                With proven expertise and a track record of delivering exceptional results, I'm ready to help bring your next project to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  Start Your Project
                </motion.a>
                <motion.a
                  href="mailto:attafiahmed.dev@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
                >
                  Get In Touch
                </motion.a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
