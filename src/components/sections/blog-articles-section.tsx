'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, ExternalLink, Calendar, ArrowRight } from 'lucide-react'

// Blog articles data with LinkedIn post links
const blogArticles = [
  {
    id: 1,
    title: "How to build a personal coding portfolio",
    description: "Dive into a coding exploration! 🚀 Navigate platforms, elevate your portfolio, and engage with a thriving professional community.",
    category: "web Development",
    publishDate: "2025-01-15",
    linkedinUrl: "https://www.linkedin.com/posts/ahmed-attafi_coding-adventure-activity-7153744110187687936-c7FV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADglTuYB2KSHRCeCl-tt-Iz2vTs2gEpwstc"
  },
  {
    id: 2,
    title: "How to Expand your skills across varied platforms",
    description: "Elevate Your Coding Journey! From LeetCode's algorithmic challenges to Codingame's gaming adventures, explore diverse platforms for skill mastery. Discover your coding playground and excel in programming.",
    category: "Programming Languages",
    publishDate: "2025-01-10",
    linkedinUrl: "https://www.linkedin.com/posts/ahmed-attafi_platforms-for-mastery-and-innovation-activity-7142466677643931649-D-jq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADglTuYB2KSHRCeCl-tt-Iz2vTs2gEpwstc"
  },
  {
    id: 3,
    title: "Difference between Edge, Fog, and Cloud Computing",
    description: "Embark on a journey through the heart of IoT computing paradigms - Edge, Fog, and Cloud. Explore how these innovative approaches shape data processing and drive connectivity. Join me in discovering the dynamic interplay between where data is processed and its impact on the future of technology.",
    category: "IoT & Cloud",
    publishDate: "2025-01-08",
    linkedinUrl: "https://www.linkedin.com/posts/ahmed-attafi_navigating-edge-fog-and-cloud-computing-activity-7102631182483251200-cc_T?utm_source=share&utm_medium=member_desktop&rcm=ACoAADglTuYB2KSHRCeCl-tt-Iz2vTs2gEpwstc"
  },

] 

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getCategoryColor = (category: string) => {
  const colors = {
    'IoT & Cloud': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'Frontend Development': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Backend Development': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    'System Architecture': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
    'Programming Languages': 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    'Cybersecurity': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
  }
  return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
}

export function BlogArticlesSection() {
  const handleLinkedInRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:via-teal-950/20 dark:to-cyan-950/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-teal-50/30 to-cyan-50/30 dark:from-blue-900/10 dark:via-teal-900/10 dark:to-cyan-900/10" />
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
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
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Blog &{' '}
              <span className="inline-block bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Articles
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and deep dives into modern software development, IoT solutions, and enterprise architecture
          </p>
        </motion.div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 h-full overflow-hidden group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 group-hover:from-blue-500/30 group-hover:to-teal-500/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-teal-500/30 rounded-2xl flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <CardContent className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`text-xs font-medium ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.publishDate)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300 leading-tight">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>

                  {/* Go to Post Button */}
                  <Button
                    onClick={() => handleLinkedInRedirect(article.linkedinUrl)}
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-0 group transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Go to post
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}
