import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set');
}

export const sql = neon(process.env.DATABASE_URL);

// Database schema interfaces
export interface Contact {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: Date;
  replied: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  featured: boolean;
  created_at: Date;
}

// Database functions
export async function saveContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<Contact> {
  try {
    const result = await sql`
      INSERT INTO contacts (name, email, subject, message, created_at)
      VALUES (${data.name}, ${data.email}, ${data.subject}, ${data.message}, NOW())
      RETURNING id, name, email, subject, message, created_at, replied
    `;
    return result[0] as Contact;
  } catch (error) {
    console.error('Database error saving contact:', error);
    throw new Error('Failed to save contact to database');
  }
}

export async function getContacts(limit = 50): Promise<Contact[]> {
  try {
    const contacts = await sql`
      SELECT id, name, email, subject, message, created_at, replied
      FROM contacts 
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return contacts as Contact[];
  } catch (error) {
    console.error('Database error fetching contacts:', error);
    throw new Error('Failed to fetch contacts from database');
  }
}

export async function markContactAsReplied(id: number): Promise<void> {
  try {
    await sql`
      UPDATE contacts 
      SET replied = true 
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database error updating contact:', error);
    throw new Error('Failed to update contact status');
  }
}

export async function getContactStats(): Promise<{
  total: number;
  thisMonth: number;
  replied: number;
  pending: number;
}> {
  try {
    const [totalResult, monthResult, repliedResult, pendingResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM contacts`,
      sql`SELECT COUNT(*) as count FROM contacts WHERE created_at >= DATE_TRUNC('month', NOW())`,
      sql`SELECT COUNT(*) as count FROM contacts WHERE replied = true`,
      sql`SELECT COUNT(*) as count FROM contacts WHERE replied = false`
    ]);

    return {
      total: Number(totalResult[0].count),
      thisMonth: Number(monthResult[0].count),
      replied: Number(repliedResult[0].count),
      pending: Number(pendingResult[0].count)
    };
  } catch (error) {
    console.error('Database error fetching stats:', error);
    throw new Error('Failed to fetch contact statistics');
  }
}

// Initialize database tables (run this once)
export async function initializeDatabase(): Promise<void> {
  try {
    // Create contacts table
    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        replied BOOLEAN DEFAULT FALSE
      )
    `;

    // Create projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        technologies TEXT[],
        github_url VARCHAR(255),
        live_url VARCHAR(255),
        image_url VARCHAR(255),
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Create blog_posts table (for future use)
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        content TEXT,
        excerpt TEXT,
        published BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `;

    // Create page_views table (for analytics)
    await sql`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        page VARCHAR(255) NOT NULL,
        visitor_ip VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw new Error('Failed to initialize database tables');
  }
}

// Test database connection
export async function testConnection(): Promise<boolean> {
  try {
    await sql`SELECT 1 as test`;
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}
