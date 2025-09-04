'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Search, 
  Filter,
  Tag,
  User,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  TrendingUp
} from 'lucide-react'

// Blog articles data with proper routing links
const blogArticles = [
  {
    id: 1,
    title: "Building Scalable IoT Solutions with Azure IoT Hub",
    excerpt: "A comprehensive guide to architecting enterprise-grade IoT systems using Microsoft Azure, covering device management, data processing, and real-time analytics.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2025-01-15",
    readingTime: 8,
    category: "IoT",
    tags: ["Azure", "IoT", "Cloud", "Enterprise"],
    featured: true,
    image: "/blog/iot-azure.jpg",
    views: 1247,
    likes: 89,
    status: "published",
    slug: "building-scalable-iot-solutions-azure"
  },
  {
    id: 2,
    title: "Modern React Patterns: Hooks, Context, and Performance",
    excerpt: "Advanced patterns for building maintainable and performant React applications with hooks, context, and optimization techniques.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2025-01-10",
    readingTime: 12,
    category: "Frontend",
    tags: ["React", "JavaScript", "Performance", "Hooks"],
    featured: true,
    image: "/blog/react-patterns.jpg",
    views: 2156,
    likes: 134,
    status: "published",
    slug: "modern-react-patterns-performance"
  },
  {
    id: 3,
    title: "Database Performance Optimization: From Slow Queries to Lightning Fast",
    excerpt: "Complete guide to identifying bottlenecks and optimizing database performance for production applications.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2025-01-08",
    readingTime: 15,
    category: "Backend",
    tags: ["Database", "Performance", "SQL", "Optimization", "PostgreSQL", "Indexing"],
    featured: true,
    image: "/blog/database-optimization.jpg",
    views: 3842,
    likes: 287,
    status: "published",
    slug: "database-performance-optimization"
  },
  {
    id: 4,
    title: "Microservices Architecture: Design Patterns and Best Practices",
    excerpt: "Build scalable, maintainable microservices systems with proven architectural patterns and implementation strategies.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2025-01-06",
    readingTime: 18,
    category: "Architecture",
    tags: ["Microservices", "Architecture", "Distributed Systems", "API Design", "DevOps"],
    featured: false,
    image: "/blog/microservices.jpg",
    views: 4721,
    likes: 356,
    status: "published",
    slug: "microservices-architecture-patterns"
  },
  {
    id: 5,
    title: "TypeScript Best Practices for Enterprise Development",
    excerpt: "Essential TypeScript patterns and practices that improve code quality, developer experience, and project maintainability.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2024-12-20",
    readingTime: 7,
    category: "Frontend",
    tags: ["TypeScript", "JavaScript", "Enterprise", "Best Practices"],
    featured: false,
    image: "/blog/typescript-practices.jpg",
    views: 734,
    likes: 45,
    status: "published",
    slug: "typescript-best-practices-enterprise"
  },
  {
    id: 6,
    title: "Security Best Practices for Modern Web Applications",
    excerpt: "Comprehensive security guidelines covering authentication, authorization, data protection, and common vulnerability prevention.",
    content: "Full article content would be here...",
    author: "Ahmed Attafi",
    publishDate: "2024-12-15",
    readingTime: 11,
    category: "Security",
    tags: ["Security", "Web", "Authentication", "OWASP"],
    featured: false,
    image: "/blog/web-security.jpg",
    views: 1098,
    likes: 76,
    status: "published",
    slug: "web-security-best-practices"
  }
]

const categories = [
  { name: 'All', count: blogArticles.length },
  { name: 'IoT', count: blogArticles.filter(article => article.category === 'IoT').length },
  { name: 'Frontend', count: blogArticles.filter(article => article.category === 'Frontend').length },
  { name: 'Backend', count: blogArticles.filter(article => article.category === 'Backend').length },
  { name: 'Architecture', count: blogArticles.filter(article => article.category === 'Architecture').length },
  { name: 'Security', count: blogArticles.filter(article => article.category === 'Security').length }
]

export function BlogArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.featured)
  const regularArticles = filteredArticles.filter(article => !article.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles, tags, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="pl-12 pr-4 py-3 w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700 focus:border-blue-500 dark:focus:border-blue-400 rounded-xl"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={`relative transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                      : 'border-blue-200 dark:border-blue-700 hover:bg-blue-500/10'
                  }`}
                >
                  {category.name}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs bg-white/20 dark:bg-white/10"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Featured Articles
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative bg-gradient-to-br from-blue-500/10 to-teal-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm h-full overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-teal-400/5 group-hover:from-blue-400/10 group-hover:to-teal-400/10 transition-all duration-500" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        Featured
                      </Badge>
                    </div>

                    <CardContent className="relative p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="border-blue-300 dark:border-blue-700">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishDate)}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-cyan-600 transition-all duration-300">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readingTime} min read
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {article.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {article.likes}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Link href={`/blog/${article.slug}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 group"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        {regularArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-8">
              Latest Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {regularArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    layout
                  >
                    <Card className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-300/30 dark:border-cyan-700/30 backdrop-blur-sm h-full overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="border-cyan-300 dark:border-cyan-700 text-xs">
                            {article.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            {formatDate(article.publishDate)}
                          </div>
                        </div>

                        <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300 leading-tight">
                          {article.title}
                        </h4>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between mb-4 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {article.readingTime} min
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views}
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {article.likes}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {article.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Link href={`/blog/${article.slug}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 p-2"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* No Results State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search terms or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
