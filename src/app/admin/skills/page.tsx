"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getSkills } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, Edit, Code, Palette, Server, Wrench, Sparkles } from "lucide-react";
import Link from "next/link";

const categoryIcons = {
  'Frontend': Palette,
  'Backend': Server,
  'Language': Code,
  'Tool': Wrench,
  'Database': Server,
  'Framework': Code,
  'frontend': Palette,
  'backend': Server,
  'iot': Wrench,
  'cloud': Server,
  'testing': Code,
};

const categoryColors = {
  'Frontend': 'from-blue-500 to-purple-500',
  'Backend': 'from-green-500 to-blue-500',
  'Language': 'from-purple-500 to-pink-500',
  'Tool': 'from-orange-500 to-red-500',
  'Database': 'from-red-500 to-pink-500',
  'Framework': 'from-indigo-500 to-purple-500',
  'frontend': 'from-blue-500 to-purple-500',
  'backend': 'from-green-500 to-blue-500',
  'iot': 'from-teal-500 to-cyan-500',
  'cloud': 'from-sky-500 to-blue-500',
  'testing': 'from-emerald-500 to-green-500',
};

interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  created_at: Date;
}

export default function SkillsPage() {
  const { data: session, status } = useSession();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      loadSkills();
    }
  }, [status]);

  const loadSkills = async () => {
    try {
      const skillData = await getSkills();
      setSkills(skillData);
    } catch (error) {
      console.error("Failed to load skills:", error);
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
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
                  Skills
                </h1>
                <p className="text-muted-foreground">
                  Manage your technical skills and proficiency levels
                </p>
              </div>
            </div>
            <Link href="/admin/skills/new">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {skills.length === 0 ? (
            <Card className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5" />
              <CardContent className="flex flex-col items-center justify-center py-12 relative z-10">
                <Code className="w-16 h-16 text-purple-400 mb-4 animate-pulse" />
                <h3 className="text-2xl font-medium gradient-text-purple-pink mb-2">
                  No skills yet
                </h3>
                <p className="text-muted-foreground text-center max-w-sm mb-6">
                  Start showcasing your expertise by adding your technical skills.
                </p>
                <Link href="/admin/skills/new">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Skill
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => {
                const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Code;
                const gradientClass = categoryColors[category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';
                
                return (
                  <div key={category}>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientClass} mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-semibold gradient-text-purple-pink">
                          {category}
                        </h2>
                        <p className="text-muted-foreground">
                          {categorySkills.length} skill{categorySkills.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categorySkills.map((skill) => (
                        <Card key={skill.id} className="relative overflow-hidden border-purple-200/30 dark:border-purple-800/30 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-1">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientClass} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                          
                          <CardHeader className="pb-3 relative z-10">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                                  {skill.name}
                                </CardTitle>
                                <CardDescription>
                                  {skill.level}% proficiency
                                </CardDescription>
                              </div>
                              <Link href={`/admin/skills/${skill.id}/edit`}>
                                <Button size="sm" variant="outline" className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10">
                                  <Edit className="w-4 h-4" />
                                </Button>
                              </Link>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="relative z-10">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span>Proficiency</span>
                                  <span className="font-medium">{skill.level}%</span>
                                </div>
                                <Progress 
                                  value={skill.level} 
                                  className="w-full h-2"
                                />
                              </div>
                              
                              <div className="flex justify-between items-center text-xs text-muted-foreground pt-3 border-t border-purple-200/20 dark:border-purple-800/20">
                                <span>Level: {skill.level >= 90 ? 'Expert' : skill.level >= 70 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Beginner'}</span>
                                <span>Added {new Date(skill.created_at).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
