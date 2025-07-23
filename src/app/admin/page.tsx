"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  MessageSquare, 
  FolderOpen, 
  PenTool, 
  BarChart3, 
  Settings,
  LogOut,
  Mail,
  Eye,
  TrendingUp,
  Sparkles,
  Crown
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (status === "loading" || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global gradient background */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      {/* Header */}
      <header className="relative z-10 bg-background/80 backdrop-blur-xl border-b border-purple-200/20 dark:border-purple-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-4xl font-bold gradient-text-purple-pink mb-2">
                <Crown className="inline-block w-8 h-8 mr-3" />
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
                Welcome back, {session?.user?.name || session?.user?.email}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{session?.user?.name || "Admin"}</p>
                <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
              </div>
              <Button 
                onClick={() => signOut({ callbackUrl: "/" })}
                variant="outline" 
                size="sm" 
                className="border-purple-200/30 hover:border-purple-400/50 hover:bg-purple-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                <MessageSquare className="h-5 w-5 text-purple-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent">12</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                  +2 from last week
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Projects</CardTitle>
                <FolderOpen className="h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold bg-gradient-to-br from-green-600 to-blue-600 bg-clip-text text-transparent">3</div>
                <p className="text-xs text-muted-foreground">
                  Active portfolio projects
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                <Eye className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">1,234</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium">Newsletter Subs</CardTitle>
                <TrendingUp className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold bg-gradient-to-br from-orange-600 to-pink-600 bg-clip-text text-transparent">89</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                  +5 new this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Management Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <Link href="/admin/contacts" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-blue-600 transition-colors">
                    <Mail className="w-6 h-6 mr-3 text-blue-600 group-hover:scale-110 transition-transform" />
                    Contact Messages
                  </CardTitle>
                  <CardDescription>
                    Manage contact form submissions and inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      View and respond to messages
                    </span>
                    <Button variant="outline" size="sm" className="border-blue-200/50 hover:border-blue-400 hover:bg-blue-500/10 group-hover:shadow-lg">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/projects" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                    <FolderOpen className="w-6 h-6 mr-3 text-green-600 group-hover:scale-110 transition-transform" />
                    Projects
                  </CardTitle>
                  <CardDescription>
                    Add, edit, and manage your portfolio projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Showcase your work
                    </span>
                    <Button variant="outline" size="sm" className="border-green-200/50 hover:border-green-400 hover:bg-green-500/10 group-hover:shadow-lg">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/skills" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-purple-600 transition-colors">
                    <Users className="w-6 h-6 mr-3 text-purple-600 group-hover:scale-110 transition-transform" />
                    Skills
                  </CardTitle>
                  <CardDescription>
                    Update your skills and proficiency levels
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Technical expertise
                    </span>
                    <Button variant="outline" size="sm" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 group-hover:shadow-lg">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/blog" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 group-hover:from-orange-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-orange-600 transition-colors">
                    <PenTool className="w-6 h-6 mr-3 text-orange-600 group-hover:scale-110 transition-transform" />
                    Blog Posts
                  </CardTitle>
                  <CardDescription>
                    Write and publish articles and tutorials
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Share your knowledge
                    </span>
                    <Button variant="outline" size="sm" className="border-orange-200/50 hover:border-orange-400 hover:bg-orange-500/10 group-hover:shadow-lg">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/analytics" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-indigo-600 transition-colors">
                    <BarChart3 className="w-6 h-6 mr-3 text-indigo-600 group-hover:scale-110 transition-transform" />
                    Analytics
                  </CardTitle>
                  <CardDescription>
                    View site statistics and visitor insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Track performance
                    </span>
                    <Button variant="outline" size="sm" className="border-indigo-200/50 hover:border-indigo-400 hover:bg-indigo-500/10 group-hover:shadow-lg">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/admin/settings" className="group">
              <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-purple-500/5 group-hover:from-gray-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center group-hover:text-gray-600 transition-colors">
                    <Settings className="w-6 h-6 mr-3 text-gray-600 group-hover:scale-110 transition-transform" />
                    Settings
                  </CardTitle>
                  <CardDescription>
                    Configure site settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      System configuration
                    </span>
                    <Button variant="outline" size="sm" className="border-gray-200/50 hover:border-gray-400 hover:bg-gray-500/10 group-hover:shadow-lg">
                      Configure
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gradient-text-purple-pink">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-4">
                  <Link href="/admin/projects/new">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                      <FolderOpen className="w-4 h-4 mr-2" />
                      Add New Project
                    </Button>
                  </Link>
                  <Link href="/admin/blog/new">
                    <Button variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                      <PenTool className="w-4 h-4 mr-2" />
                      Write Article
                    </Button>
                  </Link>
                  <Link href="/" target="_blank">
                    <Button variant="outline" className="border-blue-200/50 hover:border-blue-400 hover:bg-blue-500/10">
                      <Eye className="w-4 h-4 mr-2" />
                      View Site
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
