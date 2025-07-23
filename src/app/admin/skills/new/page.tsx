'use client';

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Plus, Sparkles, Code, Database, Palette, Wrench, Globe, Zap, Save } from "lucide-react";
import Link from "next/link";

const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required").max(50, "Name must be 50 characters or less"),
  category: z.string().min(1, "Category is required"),
  level: z.number().min(1, "Level must be at least 1").max(100, "Level cannot exceed 100"),
  description: z.string().optional(),
  years_experience: z.number().min(0, "Years must be 0 or more").optional(),
});

type SkillFormData = z.infer<typeof skillSchema>;

const skillCategories = [
  { value: 'Frontend', label: 'Frontend Development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
  { value: 'Backend', label: 'Backend Development', icon: Database, color: 'from-green-500 to-emerald-500' },
  { value: 'Mobile', label: 'Mobile Development', icon: Zap, color: 'from-purple-500 to-violet-500' },
  { value: 'DevOps', label: 'DevOps & Infrastructure', icon: Wrench, color: 'from-orange-500 to-red-500' },
  { value: 'Design', label: 'Design & UI/UX', icon: Palette, color: 'from-pink-500 to-rose-500' },
  { value: 'Programming', label: 'Programming Languages', icon: Code, color: 'from-indigo-500 to-blue-500' },
];

export default function NewSkillPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<SkillFormData>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      level: 70,
      years_experience: 1,
    }
  });

  const levelValue = watch('level', 70);

  useEffect(() => {
    if (status === 'unauthenticated') {
      redirect("/admin/login");
    }
  }, [status]);

  const onSubmit = async (data: SkillFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to create skill');
      }

      router.push('/admin/skills');
    } catch (error) {
      console.error('Error creating skill:', error);
      alert('Failed to create skill. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLevelDescription = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 70) return 'from-blue-500 to-cyan-500';
    if (level >= 50) return 'from-yellow-500 to-orange-500';
    return 'from-gray-500 to-slate-500';
  };

  if (status === 'loading') {
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
              <Link href="/admin/skills">
                <Button variant="outline" size="sm" className="mr-6 border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10 backdrop-blur-sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Skills
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mr-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text-purple-pink">
                    Add New Skill
                  </h1>
                  <p className="text-muted-foreground">
                    Showcase your expertise and proficiency
                  </p>
                </div>
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
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl gradient-text-purple-pink">Skill Information</CardTitle>
              <CardDescription>
                Add a new skill to your portfolio and set your proficiency level
              </CardDescription>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium gradient-text-purple-pink">
                      Skill Name *
                    </label>
                    <Input
                      {...register('name')}
                      placeholder="e.g., React, Python, Figma"
                      className="border-purple-200/50 focus:border-purple-400 bg-background/50"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium gradient-text-purple-pink">
                      Years of Experience
                    </label>
                    <Input
                      {...register('years_experience', { valueAsNumber: true })}
                      type="number"
                      min="0"
                      step="0.5"
                      placeholder="1.5"
                      className="border-purple-200/50 focus:border-purple-400 bg-background/50"
                    />
                    {errors.years_experience && (
                      <p className="text-red-400 text-sm">{errors.years_experience.message}</p>
                    )}
                  </div>
                </div>

                {/* Category Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-medium gradient-text-purple-pink">
                    Category *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {skillCategories.map((category) => {
                      const IconComponent = category.icon;
                      const isSelected = selectedCategory === category.value;
                      
                      return (
                        <button
                          key={category.value}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(category.value);
                            setValue('category', category.value);
                          }}
                          className={`
                            relative p-4 rounded-lg border transition-all duration-300 text-left
                            ${isSelected 
                              ? 'border-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20' 
                              : 'border-purple-200/30 hover:border-purple-300 hover:bg-purple-500/5'
                            }
                          `}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className={`font-medium ${isSelected ? 'text-purple-300' : 'text-foreground'}`}>
                                {category.label}
                              </div>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="absolute top-2 right-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {errors.category && (
                    <p className="text-red-400 text-sm">{errors.category.message}</p>
                  )}
                </div>

                {/* Proficiency Level */}
                <div className="space-y-4">
                  <label className="text-sm font-medium gradient-text-purple-pink">
                    Proficiency Level: {levelValue}% - {getLevelDescription(levelValue)}
                  </label>
                  <div className="space-y-3">
                    <div className="relative">
                      <Progress 
                        value={levelValue} 
                        className="w-full h-3"
                      />
                      <div className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${getLevelColor(levelValue)} transition-all duration-300`} 
                           style={{ width: `${levelValue}%` }} />
                    </div>
                    <Input
                      {...register('level', { valueAsNumber: true })}
                      type="range"
                      min="1"
                      max="100"
                      step="5"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Beginner (1-49%)</span>
                      <span>Intermediate (50-69%)</span>
                      <span>Advanced (70-89%)</span>
                      <span>Expert (90-100%)</span>
                    </div>
                  </div>
                  {errors.level && (
                    <p className="text-red-400 text-sm">{errors.level.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-sm font-medium gradient-text-purple-pink">
                    Description (Optional)
                  </label>
                  <Textarea
                    {...register('description')}
                    placeholder="Brief description of your experience with this skill..."
                    rows={3}
                    className="border-purple-200/50 focus:border-purple-400 bg-background/50"
                  />
                  {errors.description && (
                    <p className="text-red-400 text-sm">{errors.description.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4">
                  <Link href="/admin/skills">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="border-purple-200/50 hover:border-purple-400 hover:bg-purple-500/10"
                    >
                      Cancel
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Saving...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Save className="w-4 h-4 mr-2" />
                        Add Skill
                      </div>
                    )}
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
