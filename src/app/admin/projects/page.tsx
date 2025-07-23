"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getProjects } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, Edit, Eye, Github, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  technologies?: string[];
  demo_url?: string;
  github_url?: string;
  featured: boolean;
  created_at: Date;
}

export default function ProjectsPage() {
  const { data: session, status } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      loadProjects();
    }
  }, [status]);

  const loadProjects = async () => {
    try {
      const projectData = await getProjects();
      setProjects(projectData);
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    redirect("/admin/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500"></div>
      </div>
    );
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
            <div className="flex items-center">
              <Link href="/admin">
                <Button variant="outline" size="sm" className="mr-4 border-purple-200/30 hover:border-purple-400/50 hover:bg-purple-500/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold gradient-text-purple-pink flex items-center">
                  <Sparkles className="w-8 h-8 mr-3" />
                  Projects
                </h1>
                <p className="text-muted-foreground">
                  Manage your portfolio projects
                </p>
              </div>
            </div>
            <Link href="/admin/projects/new">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                Add Project
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {projects.length === 0 ? (
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="flex flex-col items-center justify-center py-12 relative z-10">
                <Plus className="w-16 h-16 text-purple-400 mb-4 animate-pulse" />
                <h3 className="text-2xl font-medium gradient-text-purple-pink mb-2">
                  No projects yet
                </h3>
                <p className="text-muted-foreground text-center max-w-sm mb-6">
                  Start showcasing your work by adding your first project.
                </p>
                <Link href="/admin/projects/new">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <CardHeader className="pb-3 relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-1 ml-2">
                        <Link href={`/admin/projects/${project.id}/edit`}>
                          <Button size="sm" variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 relative z-10">
                    {project.image_url && (
                      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    
                    {/* Technologies */}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs bg-purple-100/50 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs bg-purple-100/50 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Links */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex space-x-2">
                        {project.demo_url && (
                          <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                          >
                            <Button size="sm" variant="outline" className="border-blue-200/50 hover:border-blue-400 hover:bg-blue-500/10">
                              <Eye className="w-4 h-4 mr-1" />
                              Demo
                            </Button>
                          </a>
                        )}
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex"
                          >
                            <Button size="sm" variant="outline" className="border-gray-200/50 hover:border-gray-400 hover:bg-gray-500/10">
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </Button>
                          </a>
                        )}
                      </div>
                      
                      <Badge variant={project.featured ? "default" : "secondary"} className={project.featured ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : ""}>
                        {project.featured ? "Featured" : "Regular"}
                      </Badge>
                    </div>
                    
                    {/* Metadata */}
                    <div className="pt-4 border-t border-purple-200/20 dark:border-purple-800/20">
                      <p className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Created {new Date(project.created_at).toLocaleDateString()}
                      </p>
                    </div>
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
