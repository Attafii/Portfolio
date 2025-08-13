'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  GitBranch, 
  Star, 
  GitFork, 
  Calendar,
  Code2,
  ExternalLink,
  Activity,
  Flame,
  TrendingUp,
  Users
} from 'lucide-react'

// Mock GitHub data - in production, this would come from GitHub API
const githubStats = {
  totalRepos: 42,
  totalStars: 156,
  totalForks: 23,
  totalContributions: 1247,
  currentStreak: 15,
  longestStreak: 47,
  followers: 89,
  following: 34
}

const languageStats = [
  { name: 'TypeScript', percentage: 35, color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', percentage: 28, color: 'from-teal-500 to-teal-600' },
  { name: 'Python', percentage: 18, color: 'from-cyan-500 to-cyan-600' },
  { name: 'C#', percentage: 12, color: 'from-blue-400 to-blue-500' },
  { name: 'SQL', percentage: 7, color: 'from-teal-400 to-teal-500' }
]

const recentRepos = [
  {
    name: 'Portfolio-Website',
    description: 'Modern portfolio built with Next.js 15, TypeScript, and Tailwind CSS',
    language: 'TypeScript',
    stars: 12,
    forks: 3,
    updated: '2 days ago',
    url: 'https://github.com/Attafii/Portfolio'
  },
  {
    name: 'IoT-Smart-Home',
    description: 'Smart home automation system using ESP32 and Azure IoT Hub',
    language: 'C++',
    stars: 8,
    forks: 2,
    updated: '1 week ago',
    url: '#'
  },
  {
    name: 'AI-Chatbot-Assistant',
    description: 'Intelligent chatbot powered by Groq API and fine-tuned models',
    language: 'Python',
    stars: 15,
    forks: 4,
    updated: '3 days ago',
    url: '#'
  }
]

const contributionData = [
  { day: 'Mon', contributions: 3 },
  { day: 'Tue', contributions: 7 },
  { day: 'Wed', contributions: 5 },
  { day: 'Thu', contributions: 9 },
  { day: 'Fri', contributions: 12 },
  { day: 'Sat', contributions: 2 },
  { day: 'Sun', contributions: 4 }
]

export function GitHubActivitySection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-900/10 dark:via-teal-900/10 dark:to-cyan-900/10" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"
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
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              GitHub{' '}
              <span className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Activity
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A snapshot of my coding journey, contributions, and open-source projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* GitHub Stats Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-teal-400/5" />
              <CardContent className="relative p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    GitHub Statistics
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: 'Repositories', value: githubStats.totalRepos, icon: Code2, color: 'from-blue-500 to-blue-600' },
                    { label: 'Total Stars', value: githubStats.totalStars, icon: Star, color: 'from-teal-500 to-teal-600' },
                    { label: 'Forks', value: githubStats.totalForks, icon: GitFork, color: 'from-cyan-500 to-cyan-600' },
                    { label: 'Followers', value: githubStats.followers, icon: Users, color: 'from-blue-400 to-teal-400' }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${stat.color}/20 rounded-xl flex items-center justify-center`}>
                        <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Contribution Streak */}
                <div className="mt-8 pt-8 border-t border-blue-200/30 dark:border-blue-700/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Current Streak</span>
                    </div>
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      {githubStats.currentStreak} days
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Longest streak: {githubStats.longestStreak} days • Total contributions: {githubStats.totalContributions}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Weekly Contribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-300/30 dark:border-cyan-700/30 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    This Week
                  </h3>
                </div>

                <div className="space-y-4">
                  {contributionData.map((day) => (
                    <div key={day.day} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400 w-8">
                        {day.day}
                      </span>
                      <div className="flex-1 mx-3">
                        <div className="h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(day.contributions / 12) * 100}%` }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 w-6 text-right">
                        {day.contributions}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Language Stats and Recent Repositories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Language Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="relative bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-300/30 dark:border-teal-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Language Distribution
                  </h3>
                </div>

                <div className="space-y-4">
                  {languageStats.map((lang, index) => (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {lang.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {lang.percentage}%
                        </span>
                      </div>
                      <div className="h-2 bg-teal-100 dark:bg-teal-900/30 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Repositories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Recent Repositories
                    </h3>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-300 dark:border-blue-700 hover:bg-blue-500/10"
                    asChild
                  >
                    <a href="https://github.com/Attafii" target="_blank" rel="noopener noreferrer">
                      View All
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  {recentRepos.map((repo, index) => (
                    <motion.div
                      key={repo.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-blue-200/30 dark:border-blue-700/30"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {repo.name}
                        </a>
                        <Badge variant="outline" className="text-xs">
                          {repo.language}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {repo.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {repo.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-3 h-3" />
                            {repo.forks}
                          </div>
                        </div>
                        <span>Updated {repo.updated}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white"
            asChild
          >
            <a href="https://github.com/Attafii" target="_blank" rel="noopener noreferrer">
              <GitBranch className="w-5 h-5 mr-2" />
              Explore My GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
