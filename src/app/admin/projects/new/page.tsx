"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Upload, Sparkles, Save } from "lucide-react";
import Link from "next/link";

export default function AddProjectPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    long_description: "",
    category: "",
    image_url: "",
    github_url: "",
    demo_url: "",
    status: "Completed",
    featured: false,
    technologies: [] as string[],
    features: [] as string[],
  });
  const [newTech, setNewTech] = useState("");
  const [newFeature, setNewFeature] = useState("");

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

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()]
      }));
      setNewTech("");
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature("");
    }
  };

  const removeFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          slug: formData.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
        }),
      });

      if (response.ok) {
        router.push("/admin/projects");
      } else {
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setLoading(false);
    }
  };

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
              <Link href="/admin/projects">
                <Button variant="outline" size="sm" className="mr-4 border-purple-200/30 hover:border-purple-400/50 hover:bg-purple-500/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold gradient-text-purple-pink flex items-center">
                  <Sparkles className="w-8 h-8 mr-3" />
                  Add New Project
                </h1>
                <p className="text-muted-foreground">
                  Showcase your latest work
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center text-2xl">
                <Plus className="w-6 h-6 mr-2 text-purple-500" />
                Project Details
              </CardTitle>
              <CardDescription>
                Fill in the information about your project
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Project Title *
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="My Awesome Project"
                      className="border-purple-200/30 focus:border-purple-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Category *
                    </label>
                    <Input
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      placeholder="e.g., Web Development, IoT, Mobile App"
                      className="border-purple-200/30 focus:border-purple-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Short Description *
                  </label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of your project..."
                    rows={3}
                    className="border-purple-200/30 focus:border-purple-400"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Detailed Description
                  </label>
                  <Textarea
                    value={formData.long_description}
                    onChange={(e) => setFormData(prev => ({ ...prev, long_description: e.target.value }))}
                    placeholder="Detailed description of your project, its features, and technical implementation..."
                    rows={5}
                    className="border-purple-200/30 focus:border-purple-400"
                  />
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Image URL
                    </label>
                    <Input
                      value={formData.image_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                      placeholder="https://example.com/image.jpg"
                      className="border-purple-200/30 focus:border-purple-400"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      GitHub URL
                    </label>
                    <Input
                      value={formData.github_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, github_url: e.target.value }))}
                      placeholder="https://github.com/username/repo"
                      className="border-purple-200/30 focus:border-purple-400"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Demo URL
                    </label>
                    <Input
                      value={formData.demo_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, demo_url: e.target.value }))}
                      placeholder="https://project-demo.com"
                      className="border-purple-200/30 focus:border-purple-400"
                    />
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Technologies Used
                  </label>
                  <div className="flex space-x-2 mb-3">
                    <Input
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                      placeholder="Add technology (e.g., React, Node.js)"
                      className="border-purple-200/30 focus:border-purple-400"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTechnology())}
                    />
                    <Button type="button" onClick={addTechnology} variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100/50 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300">
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeTechnology(tech)}
                          className="ml-2 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">
                    Key Features
                  </label>
                  <div className="flex space-x-2 mb-3">
                    <Input
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      placeholder="Add key feature"
                      className="border-purple-200/30 focus:border-purple-400"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                    />
                    <Button type="button" onClick={addFeature} variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100/50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                        {feature}
                        <button
                          type="button"
                          onClick={() => removeFeature(feature)}
                          className="ml-2 hover:text-red-500"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Status and Featured */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 border border-purple-200/30 rounded-md bg-background focus:border-purple-400 focus:outline-none"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Development">In Development</option>
                      <option value="Planning">Planning</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                      className="w-4 h-4 text-purple-600 bg-background border-purple-200/30 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-foreground">
                      Feature this project
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-6">
                  <Link href="/admin/projects">
                    <Button variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {loading ? "Creating..." : "Create Project"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
