'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2,
  Database,
  Zap,
  TrendingUp,
  BarChart3,
  Target,
  Search,
  Settings,
  CheckCircle2,
  AlertTriangle,
  Info,
  Code2,
  FileText,
  Monitor,
  Activity
} from 'lucide-react'

export default function DatabasePerformanceOptimizationPage() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'performance-fundamentals', title: 'Database Performance Fundamentals', level: 1 },
    { id: 'query-optimization', title: 'Query Optimization Techniques', level: 1 },
    { id: 'indexing-strategies', title: 'Advanced Indexing Strategies', level: 1 },
    { id: 'monitoring-tools', title: 'Performance Monitoring & Tools', level: 1 },
    { id: 'scaling-strategies', title: 'Scaling & Architecture Patterns', level: 1 },
    { id: 'best-practices', title: 'Production Best Practices', level: 1 },
    { id: 'conclusion', title: 'Conclusion & Next Steps', level: 1 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-cyan-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-slate-500/5" />
      <motion.div
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-cyan-400/10 blur-3xl"
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

      <div className="relative">
        {/* Navigation Header */}
        <div className="container mx-auto px-6 pt-24 pb-8">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700 hover:bg-blue-500/10"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6 max-w-4xl mb-12"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                Backend
              </Badge>
              <Badge variant="outline" className="border-blue-300 dark:border-blue-700">
                Advanced
              </Badge>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-slate-600 bg-clip-text text-transparent leading-tight">
              Database Performance Optimization: From Slow Queries to Lightning Fast
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Complete guide to identifying bottlenecks and optimizing database performance for production applications.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Ahmed Attafi
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate('2025-01-08')}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                15 min read
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Button size="sm" variant="outline" className="text-blue-600 dark:text-blue-400">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>

          {/* Performance Stack Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    Database Performance Stack
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Complete optimization hierarchy from application to storage
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Application Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/30"
                  >
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-700 dark:text-green-300">Application Layer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Query optimization, connection pooling, caching strategies</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-700 dark:text-green-300">
                      40% Impact
                    </Badge>
                  </motion.div>

                  {/* Database Engine Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-300/30"
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-700 dark:text-blue-300">Database Engine</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Indexing, query execution plans, buffer management</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-700 dark:text-blue-300">
                      35% Impact
                    </Badge>
                  </motion.div>

                  {/* Storage Layer */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg border border-purple-300/30"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Monitor className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-purple-700 dark:text-purple-300">Storage Layer</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Disk I/O, SSD optimization, storage configuration</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-700 dark:text-purple-300">
                      25% Impact
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-6 max-w-4xl mb-12"
        >
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Table of Contents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tableOfContents.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-500/10 transition-colors text-sm"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Introduction */}
          <motion.section
            id="introduction"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Introduction
                </h2>
                
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Database performance optimization is one of the most critical skills for any backend developer or database administrator. 
                    A slow database can bring down an entire application, causing poor user experience, increased infrastructure costs, 
                    and potentially losing customers.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-300/30 mb-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Why Database Performance Matters</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <li>• <strong>User Experience:</strong> Response times under 200ms for critical operations</li>
                          <li>• <strong>Scalability:</strong> Handle increasing load without proportional infrastructure costs</li>
                          <li>• <strong>Resource Efficiency:</strong> Optimize CPU, memory, and I/O utilization</li>
                          <li>• <strong>Cost Reduction:</strong> Reduce cloud infrastructure and licensing costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    In this comprehensive guide, we'll explore proven techniques for identifying performance bottlenecks, 
                    optimizing queries, implementing effective indexing strategies, and building scalable database architectures 
                    that can handle production workloads efficiently.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Performance Fundamentals */}
          <motion.section
            id="performance-fundamentals"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Database Performance Fundamentals
                </h2>

                {/* Performance Metrics */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Key Performance Metrics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/30">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h4 className="font-bold text-green-700 dark:text-green-300">Throughput</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Queries per second (QPS) and transactions per second (TPS)
                      </p>
                      <div className="mt-2 text-xs text-green-600 dark:text-green-400 font-mono">
                        Target: 1000+ QPS for read operations
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-300/30">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h4 className="font-bold text-blue-700 dark:text-blue-300">Latency</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Average response time for database operations
                      </p>
                      <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-mono">
                        Target: &lt;50ms for simple queries
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg border border-purple-300/30">
                      <div className="flex items-center gap-3 mb-2">
                        <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="font-bold text-purple-700 dark:text-purple-300">Resource Utilization</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        CPU, memory, and I/O usage patterns
                      </p>
                      <div className="mt-2 text-xs text-purple-600 dark:text-purple-400 font-mono">
                        Target: &lt;80% CPU utilization
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-300/30">
                      <div className="flex items-center gap-3 mb-2">
                        <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        <h4 className="font-bold text-orange-700 dark:text-orange-300">Concurrency</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Number of simultaneous database connections
                      </p>
                      <div className="mt-2 text-xs text-orange-600 dark:text-orange-400 font-mono">
                        Target: Optimal connection pool size
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After Performance Comparison */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Performance Impact Visualization</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Before Optimization */}
                    <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-lg border border-red-300/30">
                      <div className="flex items-center gap-2 mb-4">
                        <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                        <h4 className="font-bold text-red-700 dark:text-red-300">Before Optimization</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Query Response Time</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-red-200 dark:bg-red-800 rounded-full">
                              <div className="w-20 h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-red-600 dark:text-red-400">2.5s</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">CPU Usage</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-red-200 dark:bg-red-800 rounded-full">
                              <div className="w-22 h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-red-600 dark:text-red-400">85%</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Throughput</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-red-200 dark:bg-red-800 rounded-full">
                              <div className="w-8 h-2 bg-red-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-red-600 dark:text-red-400">50 QPS</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* After Optimization */}
                    <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/30">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h4 className="font-bold text-green-700 dark:text-green-300">After Optimization</h4>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Query Response Time</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-green-200 dark:bg-green-800 rounded-full">
                              <div className="w-3 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-green-600 dark:text-green-400">0.15s</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">CPU Usage</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-green-200 dark:bg-green-800 rounded-full">
                              <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-green-600 dark:text-green-400">45%</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-300">Throughput</span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 h-2 bg-green-200 dark:bg-green-800 rounded-full">
                              <div className="w-full h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm font-mono text-green-600 dark:text-green-400">1200 QPS</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Query Optimization */}
          <motion.section
            id="query-optimization"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Query Optimization Techniques
                </h2>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 p-6 rounded-lg border border-gray-300/30">
                    <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Common Query Anti-Patterns</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-red-500/10 rounded-lg border border-red-300/30">
                        <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ N+1 Query Problem</h4>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`-- Bad: Multiple queries in a loop
SELECT * FROM users WHERE id = 1;
SELECT * FROM orders WHERE user_id = 1;
SELECT * FROM users WHERE id = 2;
SELECT * FROM orders WHERE user_id = 2;
-- ... repeated for each user`}
                        </pre>
                      </div>

                      <div className="p-4 bg-green-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Optimized with JOIN</h4>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`-- Good: Single query with JOIN
SELECT u.*, o.*
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.active = true;`}
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-300/30">
                    <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-200">Query Execution Plan Analysis</h3>
                    
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Understanding execution plans is crucial for optimization:
                      </p>
                      
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
{`-- PostgreSQL: Analyze query execution
EXPLAIN (ANALYZE, BUFFERS) 
SELECT p.name, c.name as category
FROM products p
JOIN categories c ON p.category_id = c.id
WHERE p.price > 100;

-- Result shows:
-- Nested Loop  (cost=0.29..8.32 rows=1 width=64) (actual time=0.123..0.145 rows=5 loops=1)
--   -> Seq Scan on products p  (cost=0.00..4.00 rows=1 width=36) (actual time=0.089..0.091 rows=5 loops=1)
--        Filter: (price > '100'::numeric)
--   -> Index Scan using categories_pkey on categories c  (cost=0.29..4.31 rows=1 width=32)`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indexing Strategies */}
          <motion.section
            id="indexing-strategies"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Advanced Indexing Strategies
                </h2>

                {/* Index Types Comparison */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Index Types & Use Cases</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-300/30">
                      <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">B-Tree Index (Default)</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Best for equality and range queries</li>
                        <li>• Supports ORDER BY operations</li>
                        <li>• Most commonly used index type</li>
                      </ul>
                      <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`CREATE INDEX idx_user_email 
ON users(email);`}
                      </pre>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/30">
                      <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">GIN Index (Text Search)</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Full-text search operations</li>
                        <li>• Array and JSONB queries</li>
                        <li>• Composite data types</li>
                      </ul>
                      <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`CREATE INDEX idx_product_search 
ON products USING GIN(to_tsvector('english', name));`}
                      </pre>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg border border-purple-300/30">
                      <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Partial Index</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Index only subset of rows</li>
                        <li>• Reduces index size and maintenance</li>
                        <li>• Perfect for filtered queries</li>
                      </ul>
                      <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`CREATE INDEX idx_active_users 
ON users(created_at) WHERE active = true;`}
                      </pre>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-300/30">
                      <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Composite Index</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Multiple columns in one index</li>
                        <li>• Column order matters significantly</li>
                        <li>• Great for complex WHERE clauses</li>
                      </ul>
                      <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs mt-2">
{`CREATE INDEX idx_order_status_date 
ON orders(status, created_at);`}
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Index Performance Impact */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-300/30">
                  <h3 className="text-lg font-bold mb-4 text-yellow-800 dark:text-yellow-200">Index Performance Impact</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">99.7%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Query Time Reduction</div>
                      <div className="text-xs text-gray-500 mt-1">From 2.5s to 0.008s</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10x</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Throughput Increase</div>
                      <div className="text-xs text-gray-500 mt-1">From 100 to 1000 QPS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">60%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">CPU Usage Reduction</div>
                      <div className="text-xs text-gray-500 mt-1">Less table scanning</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Monitoring Tools */}
          <motion.section
            id="monitoring-tools"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Performance Monitoring & Tools
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Essential Monitoring Tools</h3>
                    
                    <div className="space-y-3">
                      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-300/30">
                        <h4 className="font-bold text-blue-700 dark:text-blue-300">pg_stat_statements</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Track execution statistics of SQL statements</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300">Prometheus + Grafana</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Real-time metrics and alerting</p>
                      </div>
                      
                      <div className="p-4 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg border border-purple-300/30">
                        <h4 className="font-bold text-purple-700 dark:text-purple-300">DataDog / New Relic</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Enterprise APM solutions</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Key Metrics to Monitor</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded">
                        <span className="text-sm font-medium">Query Response Time</span>
                        <Badge variant="secondary">P95 &lt; 100ms</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded">
                        <span className="text-sm font-medium">Connection Pool Usage</span>
                        <Badge variant="secondary">&lt; 80%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded">
                        <span className="text-sm font-medium">Cache Hit Ratio</span>
                        <Badge variant="secondary">&gt; 95%</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-500/10 rounded">
                        <span className="text-sm font-medium">Lock Wait Time</span>
                        <Badge variant="secondary">&lt; 5ms</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Best Practices */}
          <motion.section
            id="best-practices"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Production Best Practices
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-300 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Do's
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Use Connection Pooling</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Reduce connection overhead with pgBouncer or built-in pools</p>
                      </div>
                      
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Implement Query Caching</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Cache frequently accessed data with Redis or Memcached</p>
                      </div>
                      
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Monitor Query Performance</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Regular analysis of slow query logs and execution plans</p>
                      </div>
                      
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-300/30">
                        <h4 className="font-bold text-green-700 dark:text-green-300 text-sm">Use Prepared Statements</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Prevent SQL injection and improve query planning</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-red-700 dark:text-red-300 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Don'ts
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-300/30">
                        <h4 className="font-bold text-red-700 dark:text-red-300 text-sm">Don't Use SELECT *</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Fetches unnecessary data, increases network overhead</p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-300/30">
                        <h4 className="font-bold text-red-700 dark:text-red-300 text-sm">Avoid Correlated Subqueries</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Can cause N+1 problems, use JOINs instead</p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-300/30">
                        <h4 className="font-bold text-red-700 dark:text-red-300 text-sm">Don't Over-Index</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Too many indexes slow down write operations</p>
                      </div>
                      
                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-300/30">
                        <h4 className="font-bold text-red-700 dark:text-red-300 text-sm">Avoid Long Transactions</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">Causes lock contention and blocks other operations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            id="conclusion"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-300/30 dark:border-blue-700/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Conclusion & Next Steps
                </h2>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Database performance optimization is an ongoing process that requires continuous monitoring, 
                    analysis, and improvement. The techniques covered in this guide provide a solid foundation 
                    for building and maintaining high-performance database systems.
                  </p>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-lg border border-blue-300/30 mb-6">
                    <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Key Takeaways</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Start with proper indexing strategies before scaling horizontally</li>
                      <li>• Monitor performance metrics continuously, not just during incidents</li>
                      <li>• Query optimization often provides the highest ROI for performance improvements</li>
                      <li>• Connection pooling and caching are essential for production systems</li>
                      <li>• Regular maintenance tasks prevent performance degradation over time</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      Performance Engineering
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                      Database Optimization
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-4 py-2">
                      Production Systems
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>

        {/* Article Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl py-12"
        >
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                AA
              </div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-gray-200">Ahmed Attafi</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Senior Software Engineer & Database Specialist</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button size="sm" variant="outline" className="text-blue-600 dark:text-blue-400">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Link href="/blog">
                <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  More Articles
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
