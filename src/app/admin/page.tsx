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
  content: string;
  excerpt?: string;
  category: string;
  tags: string[];
  featured_image?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
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
      
      // Fetch all data in parallel
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

      setProjects(projectsData.projects || []);
      setBlogs(blogsData.blogs || []);
      setSkills(skillsData.skills || []);
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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your portfolio content</p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{projects.length}</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{blogs.length}</p>
                    <p className="text-sm text-muted-foreground">Blog Posts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{skills.length}</p>
                    <p className="text-sm text-muted-foreground">Skills</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{newsletterStats.activeSubscribers}</p>
                    <p className="text-sm text-muted-foreground">Newsletter Subscribers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="blogs">Blogs</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Projects Management</CardTitle>
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
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </CardHeader>
                <CardContent>
                  {editingProject && (
                    <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        {editingProject.id ? 'Edit Project' : 'Add New Project'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Project Title"
                          value={editingProject.title || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                        />
                        <Input
                          placeholder="Slug (URL-friendly)"
                          value={editingProject.slug || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
                        />
                        <Input
                          placeholder="Category"
                          value={editingProject.category || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                        />
                        <Input
                          placeholder="Image URL"
                          value={editingProject.image_url || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, image_url: e.target.value })}
                        />
                        <Input
                          placeholder="GitHub URL"
                          value={editingProject.github_url || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, github_url: e.target.value })}
                        />
                        <Input
                          placeholder="Demo URL"
                          value={editingProject.demo_url || ''}
                          onChange={(e) => setEditingProject({ ...editingProject, demo_url: e.target.value })}
                        />
                      </div>
                      <Textarea
                        placeholder="Short Description"
                        value={editingProject.description || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                        className="mt-4"
                      />
                      <Textarea
                        placeholder="Long Description"
                        value={editingProject.long_description || ''}
                        onChange={(e) => setEditingProject({ ...editingProject, long_description: e.target.value })}
                        className="mt-4"
                      />
                      <div className="flex items-center gap-4 mt-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={editingProject.featured || false}
                            onChange={(e) => setEditingProject({ ...editingProject, featured: e.target.checked })}
                          />
                          Featured Project
                        </label>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button onClick={saveProject}>
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline" onClick={() => setEditingProject(null)}>
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div>
                          <h4 className="font-semibold">{project.title}</h4>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant={project.featured ? "default" : "secondary"}>
                              {project.featured ? "Featured" : "Regular"}
                            </Badge>
                            <Badge variant="outline">{project.category}</Badge>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setEditingProject(project)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => deleteProject(project.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Blogs Tab - Simplified since not in original schema */}
            <TabsContent value="blogs">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Blog System Ready</h3>
                    <p className="text-muted-foreground">Blog management will be available once you add blog posts to your database.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Skills Management</CardTitle>
                  <Button
                    onClick={() => setEditingSkill({
                      name: '',
                      category: '',
                      proficiency_level: 50
                    })}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </CardHeader>
                <CardContent>
                  {editingSkill && (
                    <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">
                        {editingSkill.id ? 'Edit Skill' : 'Add New Skill'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Skill Name"
                          value={editingSkill.name || ''}
                          onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                        />
                        <Input
                          placeholder="Category"
                          value={editingSkill.category || ''}
                          onChange={(e) => setEditingSkill({ ...editingSkill, category: e.target.value })}
                        />
                        <Input
                          placeholder="Icon (optional)"
                          value={editingSkill.icon || ''}
                          onChange={(e) => setEditingSkill({ ...editingSkill, icon: e.target.value })}
                        />
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Proficiency Level: {editingSkill.proficiency_level}%
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={editingSkill.proficiency_level || 50}
                            onChange={(e) => setEditingSkill({ ...editingSkill, proficiency_level: parseInt(e.target.value) })}
                            className="w-full"
                          />
                        </div>
                      </div>
                      <Textarea
                        placeholder="Description (optional)"
                        value={editingSkill.description || ''}
                        onChange={(e) => setEditingSkill({ ...editingSkill, description: e.target.value })}
                        className="mt-4"
                      />
                      <div className="flex gap-2 mt-4">
                        <Button onClick={saveSkill}>
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline" onClick={() => setEditingSkill(null)}>
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div className="flex-1">
                          <h4 className="font-semibold">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="outline">{skill.category}</Badge>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-blue-600 transition-all duration-300"
                                  style={{ width: `${skill.proficiency_level}%` }}
                                />
                              </div>
                              <span className="text-sm text-muted-foreground">{skill.proficiency_level}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setEditingSkill(skill)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => deleteSkill(skill.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Newsletter Tab */}
            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Newsletter Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100">Total Subscribers</h4>
                      <p className="text-2xl font-bold text-blue-600">{newsletterStats.totalSubscribers}</p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 dark:text-green-100">Active Subscribers</h4>
                      <p className="text-2xl font-bold text-green-600">{newsletterStats.activeSubscribers}</p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100">Recent (30 days)</h4>
                      <p className="text-2xl font-bold text-purple-600">{newsletterStats.recentSubscriptions}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {newsletterSubscribers.map((subscriber) => (
                      <div key={subscriber.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border">
                        <div>
                          <h4 className="font-semibold">{subscriber.email}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={subscriber.active ? "default" : "secondary"}>
                              {subscriber.active ? "Active" : "Unsubscribed"}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              Subscribed: {new Date(subscriber.subscribed_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => deleteSubscriber(subscriber.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
