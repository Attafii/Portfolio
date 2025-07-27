'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ExternalLink, 
  Clock, 
  Calendar,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Code2,
  Cpu
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable IoT Systems with Arduino and Cloud',
    excerpt: 'Learn how to create robust IoT solutions that can handle thousands of devices while maintaining real-time responsiveness and reliability.',
    content: 'In this comprehensive guide, I share my experience building large-scale IoT systems from prototype to production...',
    category: 'IoT',
    readTime: '8 min read',
    publishedAt: '2024-01-15',
    tags: ['Arduino', 'IoT', 'Cloud', 'Scalability'],
    url: 'https://medium.com/@attafii/building-scalable-iot-systems',
    featured: true,
    icon: Cpu,
    color: 'text-blue-500'
  },
  {
    id: 2,
    title: 'QA Best Practices in Automotive Software Development',
    excerpt: 'Discover essential testing strategies and quality assurance practices specifically tailored for automotive software systems.',
    content: 'The automotive industry demands the highest quality standards. Here are the key practices that ensure software reliability...',
    category: 'Quality Assurance',
    readTime: '6 min read',
    publishedAt: '2024-01-08',
    tags: ['QA', 'Automotive', 'Testing', 'C#'],
    url: 'https://medium.com/@attafii/qa-automotive-software',
    featured: true,
    icon: Code2,
    color: 'text-green-500'
  },
  {
    id: 3,
    title: 'From Tunisia to Tech: My Journey as a Software Engineer',
    excerpt: 'A personal story about breaking into the tech industry, overcoming challenges, and building a career in software development.',
    content: 'Starting from a small town in Tunisia, here\'s how I navigated the challenges and opportunities in the tech world...',
    category: 'Personal',
    readTime: '5 min read',
    publishedAt: '2024-01-01',
    tags: ['Career', 'Personal Story', 'Inspiration'],
    url: 'https://medium.com/@attafii/tunisia-tech-journey',
    featured: false,
    icon: Lightbulb,
    color: 'text-teal-500'
  },
  {
    id: 4,
    title: 'Real-time Data Processing in IoT Applications',
    excerpt: 'Explore techniques for handling real-time data streams in IoT applications using modern technologies and best practices.',
    content: 'Real-time data processing is crucial for IoT applications. Learn about the architecture and tools that make it possible...',
    category: 'IoT',
    readTime: '7 min read',
    publishedAt: '2023-12-20',
    tags: ['IoT', 'Real-time', 'Data Processing', 'MQTT'],
    url: 'https://medium.com/@attafii/realtime-data-processing-iot',
    featured: false,
    icon: Cpu,
    color: 'text-blue-500'
  },
  {
    id: 5,
    title: 'Automated Testing Strategies for Modern Web Applications',
    excerpt: 'A comprehensive guide to implementing effective automated testing strategies for web applications using modern tools.',
    content: 'Automated testing is essential for maintaining code quality. Here are the strategies and tools I recommend...',
    category: 'Testing',
    readTime: '9 min read',
    publishedAt: '2023-12-10',
    tags: ['Testing', 'Automation', 'Web Development', 'CI/CD'],
    url: 'https://medium.com/@attafii/automated-testing-strategies',
    featured: false,
    icon: Code2,
    color: 'text-green-500'
  },
  {
    id: 6,
    title: 'Building Your First Arduino IoT Project',
    excerpt: 'A beginner-friendly guide to creating your first IoT project with Arduino, sensors, and cloud connectivity.',
    content: 'New to IoT? This step-by-step tutorial will help you build your first connected device using Arduino...',
    category: 'Tutorial',
    readTime: '10 min read',
    publishedAt: '2023-11-25',
    tags: ['Arduino', 'Beginner', 'Tutorial', 'IoT'],
    url: 'https://medium.com/@attafii/first-arduino-iot-project',
    featured: false,
    icon: Cpu,
    color: 'text-blue-500'
  }
]

const categories = ['All', 'IoT', 'Quality Assurance', 'Testing', 'Tutorial', 'Personal']

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 6)
  const featuredPosts = blogPosts.filter(post => post.featured)

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest <span className="bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on IoT, software development, and technology
            </p>
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-yellow-500" />
                Featured Articles
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => {
                  const Icon = post.icon
                  return (
                    <motion.div
                      key={post.id}
                      whileHover={{ y: -5 }}
                      className="group"
                    >
                      <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6">
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                              Featured
                            </Badge>
                          </div>
                          <div className={`w-12 h-12 ${post.color} bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <Badge variant="outline" className="mb-3">
                            {post.category}
                          </Badge>
                        </div>

                        <CardHeader>
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {post.excerpt}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.publishedAt)}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{post.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          <Button variant="outline" className="w-full group" asChild>
                            <a href={post.url} target="_blank" rel="noopener noreferrer">
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* All Posts Grid */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedPosts.map((post, index) => {
              const Icon = post.icon
              return (
                <motion.div
                  key={post.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4">
                      <div className={`w-10 h-10 ${post.color} bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center mb-3 shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="ghost" size="sm" className="w-full group" asChild>
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Read More
                          <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Load More / View All */}
          {filteredPosts.length > 6 && (
            <motion.div variants={fadeInUp} className="text-center">
              <Button
                onClick={() => setShowAll(!showAll)}
                variant="outline"
                size="lg"
              >
                {showAll ? 'Show Less' : `View All ${filteredPosts.length} Articles`}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div variants={fadeInUp} className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-none text-center">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Want to stay updated?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Follow me on Medium for the latest articles on IoT, software development, 
                  and technology insights. I regularly share tutorials, best practices, and lessons learned.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" asChild>
                    <a href="https://medium.com/@attafii" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Follow on Medium
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#contact">
                      Suggest a Topic
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
