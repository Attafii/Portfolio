import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { z } from 'zod';

const skillSchema = z.object({
  name: z.string().min(1).max(50),
  category: z.string().min(1),
  level: z.number().min(1).max(100),
  description: z.string().optional(),
  years_experience: z.number().min(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = skillSchema.parse(body);

    // Here you would typically save to your database
    // For now, we'll just return a success response
    console.log('Creating skill:', validatedData);

    return NextResponse.json(
      { 
        message: 'Skill created successfully',
        skill: {
          id: Date.now(), // Temporary ID
          ...validatedData,
          created_at: new Date().toISOString(),
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating skill:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Here you would typically fetch from your database
    // For now, returning empty array
    const skills: any[] = [];

    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
