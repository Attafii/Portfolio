"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Users, 
  FileText, 
  Code, 
  Mail,
  BarChart3,
  Calendar,
  Star,
  Eye,
  EyeOff
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  long_description?: string;
  category: string;
  technologies: string[];
  features: string[];
  image_url?: string;
  github_url?: string;
  demo_url?: string;
  status: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  read_time?: string;
  published_at?: Date;
  featured: boolean;
  external_url?: string;
  created_at: Date;
  updated_at: Date;
}

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency_level: number;
  icon?: string;
  description?: string;
}

interface NewsletterSubscriber {
  id: number;
  email: string;
  active: boolean;
  subscribed_at: string;
  unsubscribed_at?: string;
}

interface NewsletterStats {
  totalSubscribers: number;
  activeSubscribers: number;
  recentSubscriptions: number;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [newsletterStats, setNewsletterStats] = useState<NewsletterStats>({
    totalSubscribers: 0,
    activeSubscribers: 0,
    recentSubscriptions: 0
  });

  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost> | null>(null);
  const [editingSkill, setEditingSkill] = useState<Partial<Skill> | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      
      const [projectsRes, blogsRes, skillsRes, newsletterRes] = await Promise.all([
        fetch('/api/admin/projects'),
        fetch('/api/admin/blogs'),
        fetch('/api/admin/skills'),
        fetch('/api/admin/newsletter')
      ]);

      const projectsData = await projectsRes.json();
      const blogsData = await blogsRes.json();
      const skillsData = await skillsRes.json();
      const newsletterData = await newsletterRes.json();

      setProjects(projectsData || []);
      setBlogs(blogsData || []);
      setSkills(skillsData || []);
      setNewsletterSubscribers(newsletterData.subscribers || []);
      setNewsletterStats(newsletterData.stats || {
        totalSubscribers: 0,
        activeSubscribers: 0,
        recentSubscriptions: 0
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Project Functions
  const saveProject = async () => {
    if (!editingProject) return;

    try {
      const method = editingProject.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/projects', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProject),
      });

      if (response.ok) {
        setEditingProject(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const deleteProject = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  // Blog Functions
  const saveBlog = async () => {
    if (!editingBlog) return;

    try {
      const method = editingBlog.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/blogs', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingBlog),
      });

      if (response.ok) {
        setEditingBlog(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  const deleteBlog = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const response = await fetch('/api/admin/blogs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Skill Functions
  const saveSkill = async () => {
    if (!editingSkill) return;

    try {
      const method = editingSkill.id ? 'PUT' : 'POST';
      const response = await fetch('/api/admin/skills', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingSkill),
      });

      if (response.ok) {
        setEditingSkill(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving skill:', error);
    }
  };

  const deleteSkill = async (id: number) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;

    try {
      const response = await fetch('/api/admin/skills', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting skill:', error);
    }
  };

  // Newsletter Functions
  const deleteSubscriber = async (id: number) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;

    try {
      const response = await fetch('/api/admin/newsletter', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting subscriber:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Global gradient background */}
        <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
        
        <div className="relative min-h-screen bg-background/50 backdrop-blur-xl flex items-center justify-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Loading Admin Dashboard
            </motion.h2>
            <motion.p 
              className="text-muted-foreground font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Preparing your portfolio management interface...
            </motion.p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global gradient background matching main site */}
      <div className="fixed inset-0 animated-gradient-light dark:animated-gradient-dark opacity-10 pointer-events-none" />
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      <div className="relative min-h-screen bg-background/50 backdrop-blur-xl">
        {/* Modern Navigation Header */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-blue-200/30 dark:border-blue-800/30 shadow-lg shadow-blue-500/5"
        >
          <div className="container mx-auto px-4 lg:px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.img 
                  src="/Attafii.svg" 
                  alt="Attafii Logo" 
                  className="h-8 w-auto"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <div className="w-px h-8 bg-gradient-to-b from-blue-400/20 to-teal-400/20" />
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent font-inter">
                    Admin Dashboard
                  </h1>
                  <p className="text-sm text-muted-foreground font-inter">Portfolio Content Management</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <motion.a
                  href="/"
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-blue-500 
                             bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20
                             border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700
                             rounded-full transition-all duration-300 font-inter
                             backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ← Back to Portfolio
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 lg:px-6 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Modern Overview Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                {
                  icon: Code,
                  value: projects.length,
                  label: "Projects",
                  iconBg: "bg-blue-500/10 dark:bg-blue-500/20",
                  iconColor: "text-blue-600 dark:text-blue-400"
                },
                {
                  icon: FileText,
                  value: blogs.length,
                  label: "Blog Posts",
                  iconBg: "bg-teal-500/10 dark:bg-teal-500/20",
                  iconColor: "text-teal-600 dark:text-teal-400"
                },
                {
                  icon: BarChart3,
                  value: skills.length,
                  label: "Skills",
                  iconBg: "bg-purple-500/10 dark:bg-purple-500/20",
                  iconColor: "text-purple-600 dark:text-purple-400"
                },
                {
                  icon: Mail,
                  value: newsletterStats.activeSubscribers,
                  label: "Newsletter Subscribers",
                  iconBg: "bg-orange-500/10 dark:bg-orange-500/20",
                  iconColor: "text-orange-600 dark:text-orange-400"
                }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                      <CardContent className="p-6 relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-2xl -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500" />
                        
                        <div className="flex items-center gap-4 relative z-10">
                          <motion.div 
                            className={`w-14 h-14 ${stat.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                            whileHover={{ rotate: 10 }}
                          >
                            <IconComponent className={`w-7 h-7 ${stat.iconColor}`} />
                          </motion.div>
                          <div>
                            <motion.p 
                              className="text-3xl font-bold font-inter bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
                              whileHover={{ scale: 1.05 }}
                            >
                              {stat.value}
                            </motion.p>
                            <p className="text-sm text-muted-foreground font-inter font-medium">{stat.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Modern Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Tabs defaultValue="projects" className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex justify-center px-4"
                >
                  <TabsList className="h-15 grid grid-cols-4 max-w-2xl mx-auto bg-gradient-to-r from-blue-50/80 to-teal-50/60 dark:from-blue-950/40 dark:to-teal-950/30 backdrop-blur-xl border border-blue-300/40 dark:border-blue-700/40 rounded-2xl p-2 shadow-xl shadow-blue-500/20 dark:shadow-blue-500/10">{
                    [
                      { value: "projects", icon: Code, label: "Projects" },
                      { value: "blogs", icon: FileText, label: "Blogs" },
                      { value: "skills", icon: BarChart3, label: "Skills" },
                      { value: "newsletter", icon: Mail, label: "Newsletter" }
                    ].map((tab) => {
                      const IconComponent = tab.icon;
                      return (
                        <TabsTrigger 
                          key={tab.value}
                          value={tab.value} 
                          className="relative flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium font-inter text-sm
                                     data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-teal-500 
                                     data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/30
                                     data-[state=active]:scale-105
                                     hover:bg-blue-100/60 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300
                                     text-blue-600 dark:text-blue-400 transition-all duration-300 transform"
                        >
                          <IconComponent className="w-4 h-4 flex-shrink-0" />
                          <span className="hidden sm:inline font-semibold text-center">{tab.label}</span>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </motion.div>

                {/* Projects Tab */}
                <TabsContent value="projects">
                  <Card className="border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-blue-500/5">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-border/50">
                      <div>
                        <CardTitle className="text-xl font-bold font-inter bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                          Projects Management
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-inter mt-1">
                          Create and manage your portfolio projects
                        </p>
                      </div>
                      <Button
                        onClick={() => setEditingProject({
                          title: '',
                          slug: '',
                          description: '',
                          category: '',
                          technologies: [],
                          features: [],
                          status: 'completed',
                          featured: false
                        })}
                        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 font-inter"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Project
                      </Button>
                    </CardHeader>
                    <CardContent className="p-6">
                      {editingProject && (
                        <motion.div 
                          className="mb-8 p-6 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-900/10 dark:to-teal-900/10 rounded-2xl border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-lg font-semibold mb-6 font-inter bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                            {editingProject.id ? 'Edit Project' : 'Add New Project'}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              placeholder="Project Title"
                              value={editingProject.title || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="Slug (URL-friendly)"
                              value={editingProject.slug || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="Category"
                              value={editingProject.category || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="Status (e.g., Completed, In Progress)"
                              value={editingProject.status || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="Image URL"
                              value={editingProject.image_url || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, image_url: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="GitHub URL"
                              value={editingProject.github_url || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, github_url: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            />
                            <Input
                              placeholder="Demo URL"
                              value={editingProject.demo_url || ''}
                              onChange={(e) => setEditingProject({ ...editingProject, demo_url: e.target.value })}
                              className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter col-span-full"
                            />
                          </div>
                          <Textarea
                            placeholder="Short Description"
                            value={editingProject.description || ''}
                            onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                            className="mt-4 bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            rows={3}
                          />
                          <Textarea
                            placeholder="Long Description"
                            value={editingProject.long_description || ''}
                            onChange={(e) => setEditingProject({ ...editingProject, long_description: e.target.value })}
                            className="mt-4 bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                            rows={5}
                          />
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <label className="block text-sm font-medium mb-2 font-inter">Technologies (comma-separated)</label>
                              <Textarea
                                placeholder="React, Next.js, TypeScript, Tailwind CSS"
                                value={editingProject.technologies ? editingProject.technologies.join(', ') : ''}
                                onChange={(e) => setEditingProject({ 
                                  ...editingProject, 
                                  technologies: e.target.value.split(',').map(tech => tech.trim()).filter(tech => tech)
                                })}
                                className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                                rows={3}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium mb-2 font-inter">Features (comma-separated)</label>
                              <Textarea
                                placeholder="Real-time updates, User authentication, Responsive design"
                                value={editingProject.features ? editingProject.features.join(', ') : ''}
                                onChange={(e) => setEditingProject({ 
                                  ...editingProject, 
                                  features: e.target.value.split(',').map(feature => feature.trim()).filter(feature => feature)
                                })}
                                className="bg-background/50 border-teal-200/30 dark:border-teal-800/30 focus:border-teal-400 dark:focus:border-teal-600 font-inter"
                                rows={3}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-4 mt-6">
                            <label className="flex items-center gap-2 font-inter">
                              <input
                                type="checkbox"
                                checked={editingProject.featured || false}
                                onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked })}
                                className="rounded border-blue-300 dark:border-blue-700 text-blue-600 focus:ring-blue-500"
                              />
                              <Star className="w-4 h-4 text-yellow-500" />
                              Featured Project
                            </label>
                          </div>
                          <div className="flex gap-3 mt-6">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button 
                                onClick={saveProject}
                                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 font-inter"
                              >
                                <Save className="w-4 h-4 mr-2" />
                                Save Project
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button 
                                variant="outline" 
                                onClick={() => setEditingProject(null)}
                                className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-inter"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Cancel
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      <div className="space-y-4">
                        {projects.map((project, index) => (
                          <motion.div 
                            key={project.id} 
                            className="group relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-teal-50/40 dark:from-blue-950/30 dark:to-teal-950/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 hover:border-teal-400/60 dark:hover:border-teal-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.01, y: -2 }}
                          >
                            <div className="relative p-6 flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg font-inter">{project.title}</h4>
                                <p className="text-muted-foreground mt-1 font-inter">{project.description}</p>
                                <div className="flex items-center gap-2 mt-3">
                                  <Badge variant={project.featured ? "default" : "secondary"} className={project.featured ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}>
                                    {project.featured ? "Featured" : "Regular"}
                                  </Badge>
                                  <Badge variant="outline" className="border-teal-300 text-teal-600 dark:border-teal-600 dark:text-teal-400">{project.category}</Badge>
                                </div>
                              </div>
                              <div className="flex gap-2 ml-4">
                                <Button size="sm" variant="outline" onClick={() => setEditingProject(project)} className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-950/30">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => deleteProject(project.id)} className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/30">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs with similar modern styling */}
                <TabsContent value="blogs">
                  <Card className="border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-blue-500/5">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-border/50">
                      <div>
                        <CardTitle className="text-xl font-bold font-inter bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                          Blog Management
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-inter mt-1">
                          Create and manage your blog posts
                        </p>
                      </div>
                      <Button
                        onClick={() => setEditingBlog({
                          title: '',
                          slug: '',
                          excerpt: '',
                          content: '',
                          category: '',
                          tags: [],
                          featured: false
                        })}
                        className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 font-inter"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Blog Post
                      </Button>
                    </CardHeader>
                    <CardContent className="p-6">
                      {editingBlog && (
                        <motion.div 
                          className="mb-8 p-6 bg-gradient-to-br from-blue-50/50 to-teal-50/50 dark:from-blue-900/10 dark:to-teal-900/10 rounded-2xl border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h3 className="text-lg font-semibold mb-6 font-inter bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                            {editingBlog.id ? 'Edit Blog Post' : 'Add New Blog Post'}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                              placeholder="Blog Title"
                              value={editingBlog.title || ''}
                              onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            />
                            <Input
                              placeholder="Slug (URL-friendly)"
                              value={editingBlog.slug || ''}
                              onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            />
                            <Input
                              placeholder="Category"
                              value={editingBlog.category || ''}
                              onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            />
                            <Input
                              placeholder="Read Time (e.g., 5 min read)"
                              value={editingBlog.read_time || ''}
                              onChange={(e) => setEditingBlog({ ...editingBlog, read_time: e.target.value })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            />
                            <Input
                              placeholder="External URL (optional)"
                              value={editingBlog.external_url || ''}
                              onChange={(e) => setEditingBlog({ ...editingBlog, external_url: e.target.value })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter col-span-full"
                            />
                          </div>
                          <Textarea
                            placeholder="Excerpt (Short Description)"
                            value={editingBlog.excerpt || ''}
                            onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                            className="mt-4 bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            rows={3}
                          />
                          <Textarea
                            placeholder="Full Content (Markdown supported)"
                            value={editingBlog.content || ''}
                            onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                            className="mt-4 bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                            rows={8}
                          />
                          <div className="mt-4">
                            <label className="block text-sm font-medium mb-2 font-inter">Tags (comma-separated)</label>
                            <Textarea
                              placeholder="React, Next.js, JavaScript, Tutorial"
                              value={editingBlog.tags ? editingBlog.tags.join(', ') : ''}
                              onChange={(e) => setEditingBlog({ 
                                ...editingBlog, 
                                tags: e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag)
                              })}
                              className="bg-background/50 border-green-200/30 dark:border-green-800/30 focus:border-green-400 dark:focus:border-green-600 font-inter"
                              rows={2}
                            />
                          </div>
                          <div className="flex items-center gap-4 mt-6">
                            <label className="flex items-center gap-2 font-inter">
                              <input
                                type="checkbox"
                                checked={editingBlog.featured || false}
                                onChange={(e) => setEditingBlog({ ...editingBlog, featured: e.target.checked })}
                                className="rounded border-green-300 dark:border-green-700 text-green-600 focus:ring-green-500"
                              />
                              <Star className="w-4 h-4 text-yellow-500" />
                              Featured Post
                            </label>
                          </div>
                          <div className="flex gap-3 mt-6">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button 
                                onClick={saveBlog}
                                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 font-inter"
                              >
                                <Save className="w-4 h-4 mr-2" />
                                Save Blog Post
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button 
                                variant="outline" 
                                onClick={() => setEditingBlog(null)}
                                className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-inter"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Cancel
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      <div className="space-y-4">
                        {blogs.map((blog, index) => (
                          <motion.div 
                            key={blog.id} 
                            className="group relative overflow-hidden bg-gradient-to-br from-blue-50/80 to-teal-50/40 dark:from-blue-950/30 dark:to-teal-950/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 hover:border-teal-400/60 dark:hover:border-teal-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.01, y: -2 }}
                          >
                            <div className="relative p-6 flex items-center justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-lg font-inter">{blog.title}</h4>
                                <p className="text-muted-foreground mt-1 font-inter">{blog.excerpt}</p>
                                <div className="flex items-center gap-2 mt-3">
                                  <Badge variant={blog.featured ? "default" : "secondary"} className={blog.featured ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}>
                                    {blog.featured ? "Featured" : "Regular"}
                                  </Badge>
                                  <Badge variant="outline" className="border-teal-300 text-teal-600 dark:border-teal-600 dark:text-teal-400">{blog.category}</Badge>
                                  {blog.published_at && <Badge variant="outline" className="border-green-300 text-green-600 dark:border-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30">Published</Badge>}
                                </div>
                              </div>
                              <div className="flex gap-2 ml-4">
                                <Button size="sm" variant="outline" onClick={() => setEditingBlog(blog)} className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-950/30">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => deleteBlog(blog.id)} className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/30">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills">
                  <Card className="border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-blue-500/5">
                    <CardHeader className="flex flex-row items-center justify-between border-b border-border/50">
                      <CardTitle className="text-xl font-bold font-inter bg-gradient-to-r from-purple-600 to-violet-500 bg-clip-text text-transparent">
                        Skills Management
                      </CardTitle>
                      <Button
                        onClick={() => setEditingSkill({
                          name: '',
                          category: '',
                          proficiency_level: 50
                        })}
                        className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 font-inter"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Skill
                      </Button>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {skills.map((skill, index) => (
                          <motion.div 
                            key={skill.id} 
                            className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50/80 to-teal-50/40 dark:from-blue-950/30 dark:to-teal-950/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 hover:border-teal-400/60 dark:hover:border-teal-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold font-inter">{skill.name}</h4>
                              <div className="flex items-center gap-4 mt-2">
                                <Badge variant="outline" className="border-teal-300 text-teal-600 dark:border-teal-600 dark:text-teal-400">{skill.category}</Badge>
                                <div className="flex items-center gap-2">
                                  <div className="w-24 h-2 bg-blue-100 dark:bg-blue-900/30 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-300"
                                      style={{ width: `${skill.proficiency_level}%` }}
                                    />
                                  </div>
                                  <span className="text-sm text-muted-foreground">{skill.proficiency_level}%</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => setEditingSkill(skill)} className="border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:text-blue-400 dark:hover:bg-blue-950/30">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => deleteSkill(skill.id)} className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/30">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="newsletter">
                  <Card className="border-0 bg-card/50 backdrop-blur-xl shadow-xl shadow-blue-500/5">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold font-inter bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                        Newsletter Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:to-cyan-900/10 p-4 rounded-xl border border-blue-200/30 dark:border-blue-800/30">
                          <h4 className="font-semibold text-blue-900 dark:text-blue-100 font-inter">Total Subscribers</h4>
                          <p className="text-2xl font-bold text-blue-600 font-inter">{newsletterStats.totalSubscribers}</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10 p-4 rounded-xl border border-green-200/30 dark:border-green-800/30">
                          <h4 className="font-semibold text-green-900 dark:text-green-100 font-inter">Active Subscribers</h4>
                          <p className="text-2xl font-bold text-green-600 font-inter">{newsletterStats.activeSubscribers}</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50/50 to-violet-50/50 dark:from-purple-900/10 dark:to-violet-900/10 p-4 rounded-xl border border-purple-200/30 dark:border-purple-800/30">
                          <h4 className="font-semibold text-purple-900 dark:text-purple-100 font-inter">Recent (30 days)</h4>
                          <p className="text-2xl font-bold text-purple-600 font-inter">{newsletterStats.recentSubscriptions}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {newsletterSubscribers.map((subscriber, index) => (
                          <motion.div 
                            key={subscriber.id} 
                            className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50/80 to-teal-50/40 dark:from-blue-950/30 dark:to-teal-950/20 backdrop-blur-sm border border-blue-300/50 dark:border-blue-700/50 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 hover:border-teal-400/60 dark:hover:border-teal-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div>
                              <h4 className="font-semibold font-inter">{subscriber.email}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant={subscriber.active ? "default" : "secondary"} className={subscriber.active ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white" : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"}>
                                  {subscriber.active ? "Active" : "Unsubscribed"}
                                </Badge>
                                <span className="text-sm text-muted-foreground font-inter">
                                  Subscribed: {new Date(subscriber.subscribed_at).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => deleteSubscriber(subscriber.id)}
                              className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/30"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
