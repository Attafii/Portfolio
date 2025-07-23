'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Edit, Eye, Calendar, Clock, BookOpen, Star, ExternalLink } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  tags?: string[];
  published_at?: string;
  read_time?: string;
  featured?: boolean;
  external_url?: string;
  created_at: string;
}

export default function BlogPage() {
  const { data: session, status } = useSession();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect("/admin/login");
    }
    
    if (status === 'authenticated') {
      // In a real app, you'd fetch blog posts from an API
      // For now, using placeholder data
      setTimeout(() => {
        setBlogPosts([]);
        setLoading(false);
      }, 1000);
    }
  }, [status]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
        <div className="animated-grid opacity-10" />
        <div className="floating-orb-1" />
        <div className="floating-orb-2" />
        <div className="floating-orb-3" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-background/10 backdrop-blur-lg border-b border-purple-200/20 dark:border-purple-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/admin">
                <Button variant="outline" size="sm" className="mr-6 border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text-purple-pink">
                    Blog Posts
                  </h1>
                  <p className="text-muted-foreground">
                    Manage your articles and tutorials
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30">
                {blogPosts.length} Article{blogPosts.length !== 1 ? 's' : ''}
              </Badge>
              <Link href="/admin/blog/new">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <Plus className="w-4 h-4 mr-2" />
                  New Article
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {blogPosts.length === 0 ? (
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="flex flex-col items-center justify-center py-16 relative z-10">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
                  <BookOpen className="w-16 h-16 text-purple-400 animate-pulse" />
                </div>
                <h3 className="text-2xl font-medium gradient-text-purple-pink mb-2">
                  No blog posts yet
                </h3>
                <p className="text-muted-foreground text-center max-w-md mb-6">
                  Start sharing your knowledge by writing your first article.
                </p>
                <Link href="/admin/blog/new">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Write Your First Article
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.01] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {post.featured && (
                            <div className="p-1 rounded-md bg-gradient-to-r from-yellow-400/20 to-orange-400/20 mr-2">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            </div>
                          )}
                          <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                            {post.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Link href={`/admin/blog/${post.id}/edit`}>
                          <Button size="sm" variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        {post.published_at && (
                          <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    {/* Tags and Category */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30">
                        {post.category}
                      </Badge>
                      {post.tags && post.tags.length > 0 && (
                        <>
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-purple-200/30 text-purple-300 hover:bg-purple-500/10">
                              #{tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs border-purple-200/30 text-purple-300">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Metadata */}
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1 text-purple-400" />
                          {post.published_at 
                            ? new Date(post.published_at).toLocaleDateString()
                            : "Draft"
                          }
                        </span>
                        {post.read_time && (
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1 text-pink-400" />
                            {post.read_time}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {post.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 border-yellow-400/30">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Featured
                          </Badge>
                        )}
                        <Badge className={
                          post.published_at 
                            ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30"
                            : "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-400/30"
                        }>
                          {post.published_at ? "Published" : "Draft"}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* External URL if exists */}
                    {post.external_url && (
                      <div className="mt-4 pt-4 border-t border-purple-200/20 dark:border-purple-800/20">
                        <a
                          href={post.external_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Originally published on external platform
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
