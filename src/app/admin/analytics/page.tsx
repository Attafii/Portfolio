'use client';

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, Eye, Users, MessageSquare, TrendingUp, Activity, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect("/admin/login");
    }
    
    if (status === 'authenticated') {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [status]);

  // Placeholder data - in a real app, you'd fetch from your analytics service
  const analyticsData = {
    pageViews: {
      total: 1234,
      growth: 12,
      period: "last 30 days"
    },
    uniqueVisitors: {
      total: 456,
      growth: 8,
      period: "last 30 days"
    },
    contactMessages: {
      total: 23,
      growth: 15,
      period: "last 30 days"
    },
    topPages: [
      { path: "/", views: 567, title: "Home" },
      { path: "/projects", views: 234, title: "Projects" },
      { path: "/about", views: 189, title: "About" },
      { path: "/contact", views: 156, title: "Contact" },
    ],
    recentActivity: [
      { type: "page_view", page: "Home", timestamp: "2 minutes ago" },
      { type: "contact", page: "Contact Form", timestamp: "15 minutes ago" },
      { type: "page_view", page: "Projects", timestamp: "32 minutes ago" },
      { type: "page_view", page: "About", timestamp: "1 hour ago" },
    ]
  };

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
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text-purple-pink">
                    Analytics
                  </h1>
                  <p className="text-muted-foreground">
                    Site performance and visitor insights
                  </p>
                </div>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30">
              <Activity className="w-3 h-3 mr-1" />
              Live Data
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium gradient-text-purple-pink">Total Page Views</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                  <Eye className="h-4 w-4 text-blue-400" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold text-foreground">{analyticsData.pageViews.total.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-400 font-medium">+{analyticsData.pageViews.growth}%</span> from {analyticsData.pageViews.period}
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium gradient-text-purple-pink">Unique Visitors</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20">
                  <Users className="h-4 w-4 text-green-400" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold text-foreground">{analyticsData.uniqueVisitors.total.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-400 font-medium">+{analyticsData.uniqueVisitors.growth}%</span> from {analyticsData.uniqueVisitors.period}
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium gradient-text-purple-pink">Contact Messages</CardTitle>
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <MessageSquare className="h-4 w-4 text-purple-400" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-2xl font-bold text-foreground">{analyticsData.contactMessages.total}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-400 font-medium">+{analyticsData.contactMessages.growth}%</span> from {analyticsData.contactMessages.period}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Pages */}
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gradient-text-purple-pink">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-3">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                  </div>
                  Top Pages
                </CardTitle>
                <CardDescription>
                  Most visited pages in the last 30 days
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {analyticsData.topPages.map((page, index) => (
                    <div key={page.path} className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-200/20 dark:border-purple-800/20 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300">
                      <div>
                        <p className="font-medium text-foreground">
                          {page.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {page.path}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">
                          {page.views.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          views
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gradient-text-purple-pink">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 mr-3">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                  </div>
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest visitor interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {analyticsData.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-200/20 dark:border-purple-800/20">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">
                          {activity.type === 'page_view' ? 'Page View' : 'Contact Form'}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.page}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {activity.timestamp}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Integration Notice */}
          <div className="mt-8">
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="gradient-text-purple-pink">Analytics Integration</CardTitle>
                <CardDescription>
                  Connect your analytics service for real-time data
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Currently showing demo data. Connect Google Analytics, Plausible, or your preferred analytics service to see real visitor data.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Google Analytics
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Plausible
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Custom API
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
