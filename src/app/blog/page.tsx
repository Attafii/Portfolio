import { BlogArticlesSection } from '@/components/sections/blog-articles-section'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Home Button */}
      <div className="container mx-auto px-6 max-w-7xl mb-8">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-700 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <BlogArticlesSection />
    </div>
  )
}

export const metadata = {
  title: 'Blog | Ahmed Attafi - Software Developer & IoT Specialist',
  description: 'Technical articles, insights, and tutorials on software development, IoT solutions, and enterprise architecture by Ahmed Attafi.',
}
