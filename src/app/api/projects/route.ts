import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { addProject } from "@/lib/db";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  long_description: z.string().optional(),
  category: z.string().min(1, "Category is required"),
  technologies: z.array(z.string()).default([]),
  features: z.array(z.string()).default([]),
  image_url: z.string().url().optional().or(z.literal("")),
  github_url: z.string().url().optional().or(z.literal("")),
  demo_url: z.string().url().optional().or(z.literal("")),
  status: z.string().default("Completed"),
  featured: z.boolean().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = projectSchema.parse(body);

    // Convert empty strings to undefined for optional URL fields
    const projectData = {
      title: validatedData.title,
      description: validatedData.description,
      image_url: validatedData.image_url || undefined,
      github_url: validatedData.github_url || undefined,
      live_url: validatedData.demo_url || undefined,
      technologies: validatedData.technologies,
      featured: validatedData.featured,
    };

    const project = await addProject(projectData);

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
