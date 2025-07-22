import { NextRequest, NextResponse } from 'next/server';
import { initializeDatabase, testConnection } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    // Test connection first
    const isConnected = await testConnection();
    
    if (!isConnected) {
      return NextResponse.json(
        { error: 'Failed to connect to database. Please check your DATABASE_URL.' },
        { status: 500 }
      );
    }

    // Initialize database tables
    await initializeDatabase();

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully!',
      tables: ['contacts', 'projects', 'blog_posts', 'page_views']
    });

  } catch (error) {
    console.error('Database setup error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to initialize database',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const isConnected = await testConnection();
    
    return NextResponse.json({
      connected: isConnected,
      database_url_configured: !!process.env.DATABASE_URL,
      message: isConnected ? 'Database connection successful' : 'Database connection failed'
    });

  } catch (error) {
    return NextResponse.json(
      { 
        connected: false,
        database_url_configured: !!process.env.DATABASE_URL,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
