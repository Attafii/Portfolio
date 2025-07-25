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
  read_at?: Date;
  replied_at?: Date;
}

export interface Project {
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
  created_at: Date;
  updated_at: Date;
}

export interface BlogPost {
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

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  color: string;
  icon?: string;
  created_at: Date;
  updated_at: Date;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  subscribed_at: Date;
  unsubscribed_at?: Date;
  active: boolean;
}

// Contact Management Functions
export async function saveContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<Contact> {
  try {
    const result = await sql`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (${data.name}, ${data.email}, ${data.subject}, ${data.message})
      RETURNING id, name, email, subject, message, created_at, read_at, replied_at
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
      SELECT id, name, email, subject, message, created_at, read_at, replied_at
      FROM contact_messages 
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return contacts as Contact[];
  } catch (error) {
    console.error('Database error fetching contacts:', error);
    throw new Error('Failed to fetch contacts from database');
  }
}

export async function markContactAsRead(id: number): Promise<void> {
  try {
    await sql`
      UPDATE contact_messages 
      SET read_at = NOW() 
      WHERE id = ${id} AND read_at IS NULL
    `;
  } catch (error) {
    console.error('Database error updating contact:', error);
    throw new Error('Failed to mark contact as read');
  }
}

export async function markContactAsReplied(id: number): Promise<void> {
  try {
    await sql`
      UPDATE contact_messages 
      SET replied_at = NOW(), read_at = COALESCE(read_at, NOW())
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database error updating contact:', error);
    throw new Error('Failed to mark contact as replied');
  }
}

export async function getContactStats(): Promise<{
  total: number;
  thisMonth: number;
  unread: number;
  replied: number;
}> {
  try {
    const [totalResult, monthResult, unreadResult, repliedResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM contact_messages`,
      sql`SELECT COUNT(*) as count FROM contact_messages WHERE created_at >= DATE_TRUNC('month', NOW())`,
      sql`SELECT COUNT(*) as count FROM contact_messages WHERE read_at IS NULL`,
      sql`SELECT COUNT(*) as count FROM contact_messages WHERE replied_at IS NOT NULL`
    ]);

    return {
      total: Number(totalResult[0].count),
      thisMonth: Number(monthResult[0].count),
      unread: Number(unreadResult[0].count),
      replied: Number(repliedResult[0].count)
    };
  } catch (error) {
    console.error('Database error fetching stats:', error);
    throw new Error('Failed to fetch contact statistics');
  }
}

// Project Management Functions
export async function getProjects(options?: {
  featured?: boolean;
  category?: string;
  limit?: number;
}): Promise<Project[]> {
  try {
    if (options?.featured !== undefined && options?.category && options?.limit) {
      const result = await sql`
        SELECT id, title, slug, description, long_description, category, 
               technologies, features, image_url, github_url, demo_url, 
               status, featured, created_at, updated_at
        FROM projects
        WHERE featured = ${options.featured} AND category = ${options.category}
        ORDER BY featured DESC, created_at DESC
        LIMIT ${options.limit}
      `;
      return result as Project[];
    } else if (options?.featured !== undefined && options?.category) {
      const result = await sql`
        SELECT id, title, slug, description, long_description, category, 
               technologies, features, image_url, github_url, demo_url, 
               status, featured, created_at, updated_at
        FROM projects
        WHERE featured = ${options.featured} AND category = ${options.category}
        ORDER BY featured DESC, created_at DESC
      `;
      return result as Project[];
    } else if (options?.featured !== undefined) {
      const result = await sql`
        SELECT id, title, slug, description, long_description, category, 
               technologies, features, image_url, github_url, demo_url, 
               status, featured, created_at, updated_at
        FROM projects
        WHERE featured = ${options.featured}
        ORDER BY featured DESC, created_at DESC
        ${options.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as Project[];
    } else if (options?.category) {
      const result = await sql`
        SELECT id, title, slug, description, long_description, category, 
               technologies, features, image_url, github_url, demo_url, 
               status, featured, created_at, updated_at
        FROM projects
        WHERE category = ${options.category}
        ORDER BY featured DESC, created_at DESC
        ${options.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as Project[];
    } else {
      const result = await sql`
        SELECT id, title, slug, description, long_description, category, 
               technologies, features, image_url, github_url, demo_url, 
               status, featured, created_at, updated_at
        FROM projects
        ORDER BY featured DESC, created_at DESC
        ${options?.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as Project[];
    }
  } catch (error) {
    console.error('Database error fetching projects:', error);
    throw new Error('Failed to fetch projects from database');
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const result = await sql`
      SELECT id, title, slug, description, long_description, category, 
             technologies, features, image_url, github_url, demo_url, 
             status, featured, created_at, updated_at
      FROM projects
      WHERE slug = ${slug}
    `;
    return result[0] as Project || null;
  } catch (error) {
    console.error('Database error fetching project:', error);
    throw new Error('Failed to fetch project from database');
  }
}

// Blog Management Functions
export async function getBlogPosts(options?: {
  featured?: boolean;
  published?: boolean;
  category?: string;
  limit?: number;
}): Promise<BlogPost[]> {
  try {
    if (options?.featured !== undefined && options?.published !== undefined && options?.category) {
      const result = await sql`
        SELECT id, title, slug, excerpt, content, category, tags, 
               read_time, published_at, featured, external_url, 
               created_at, updated_at
        FROM blog_posts
        WHERE featured = ${options.featured} 
          AND published_at IS ${options.published ? sql`NOT NULL` : sql`NULL`}
          AND category = ${options.category}
        ORDER BY featured DESC, published_at DESC NULLS LAST
        ${options.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as BlogPost[];
    } else if (options?.published !== undefined) {
      const result = await sql`
        SELECT id, title, slug, excerpt, content, category, tags, 
               read_time, published_at, featured, external_url, 
               created_at, updated_at
        FROM blog_posts
        WHERE published_at IS ${options.published ? sql`NOT NULL` : sql`NULL`}
        ORDER BY featured DESC, published_at DESC NULLS LAST
        ${options?.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as BlogPost[];
    } else {
      const result = await sql`
        SELECT id, title, slug, excerpt, content, category, tags, 
               read_time, published_at, featured, external_url, 
               created_at, updated_at
        FROM blog_posts
        ORDER BY featured DESC, published_at DESC NULLS LAST
        ${options?.limit ? sql`LIMIT ${options.limit}` : sql``}
      `;
      return result as BlogPost[];
    }
  } catch (error) {
    console.error('Database error fetching blog posts:', error);
    throw new Error('Failed to fetch blog posts from database');
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const result = await sql`
      SELECT id, title, slug, excerpt, content, category, tags, 
             read_time, published_at, featured, external_url, 
             created_at, updated_at
      FROM blog_posts
      WHERE slug = ${slug}
    `;
    return result[0] as BlogPost || null;
  } catch (error) {
    console.error('Database error fetching blog post:', error);
    throw new Error('Failed to fetch blog post from database');
  }
}

// Skills Management Functions
export async function getSkills(category?: string): Promise<Skill[]> {
  try {
    if (category) {
      const result = await sql`
        SELECT id, name, category, level, color, icon, created_at, updated_at
        FROM skills
        WHERE category = ${category}
        ORDER BY level DESC
      `;
      return result as Skill[];
    } else {
      const result = await sql`
        SELECT id, name, category, level, color, icon, created_at, updated_at
        FROM skills
        ORDER BY category, level DESC
      `;
      return result as Skill[];
    }
  } catch (error) {
    console.error('Database error fetching skills:', error);
    throw new Error('Failed to fetch skills from database');
  }
}

export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
  try {
    const skills = await getSkills();
    const skillsByCategory: Record<string, Skill[]> = {};
    
    skills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });
    
    return skillsByCategory;
  } catch (error) {
    console.error('Database error grouping skills:', error);
    throw new Error('Failed to group skills by category');
  }
}

// Newsletter Management Functions
export async function subscribeToNewsletter(email: string): Promise<NewsletterSubscriber> {
  try {
    const result = await sql`
      INSERT INTO newsletter_subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) 
      DO UPDATE SET 
        active = true,
        unsubscribed_at = NULL
      RETURNING id, email, subscribed_at, unsubscribed_at, active
    `;
    return result[0] as NewsletterSubscriber;
  } catch (error) {
    console.error('Database error subscribing to newsletter:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
}

export async function unsubscribeFromNewsletter(email: string): Promise<void> {
  try {
    await sql`
      UPDATE newsletter_subscribers 
      SET active = false, unsubscribed_at = NOW()
      WHERE email = ${email}
    `;
  } catch (error) {
    console.error('Database error unsubscribing from newsletter:', error);
    throw new Error('Failed to unsubscribe from newsletter');
  }
}

// Analytics Functions
export async function trackPageView(data: {
  page_path: string;
  visitor_ip?: string;
  user_agent?: string;
  referrer?: string;
}): Promise<void> {
  try {
    await sql`
      INSERT INTO site_analytics (page_path, visitor_ip, user_agent, referrer)
      VALUES (${data.page_path}, ${data.visitor_ip || null}, ${data.user_agent || null}, ${data.referrer || null})
    `;
  } catch (error) {
    console.error('Database error tracking page view:', error);
    // Don't throw error for analytics to avoid breaking user experience
  }
}

export async function getAnalyticsStats(days = 30): Promise<{
  totalViews: number;
  uniqueVisitors: number;
  topPages: Array<{ page: string; views: number }>;
  dailyViews: Array<{ date: string; views: number }>;
}> {
  try {
    const [totalViewsResult, uniqueVisitorsResult, topPagesResult, dailyViewsResult] = await Promise.all([
      sql`
        SELECT COUNT(*) as count 
        FROM site_analytics 
        WHERE visited_at >= NOW() - INTERVAL '${days} days'
      `,
      sql`
        SELECT COUNT(DISTINCT visitor_ip) as count 
        FROM site_analytics 
        WHERE visited_at >= NOW() - INTERVAL '${days} days'
      `,
      sql`
        SELECT page_path as page, COUNT(*) as views
        FROM site_analytics 
        WHERE visited_at >= NOW() - INTERVAL '${days} days'
        GROUP BY page_path 
        ORDER BY views DESC 
        LIMIT 10
      `,
      sql`
        SELECT DATE(visited_at) as date, COUNT(*) as views
        FROM site_analytics 
        WHERE visited_at >= NOW() - INTERVAL '${days} days'
        GROUP BY DATE(visited_at) 
        ORDER BY date ASC
      `
    ]);

    return {
      totalViews: Number(totalViewsResult[0]?.count) || 0,
      uniqueVisitors: Number(uniqueVisitorsResult[0]?.count) || 0,
      topPages: topPagesResult.map((row) => ({
        page: String(row.page),
        views: Number(row.views)
      })),
      dailyViews: dailyViewsResult.map((row) => ({
        date: String(row.date),
        views: Number(row.views)
      }))
    };
  } catch (error) {
    console.error('Database error fetching analytics:', error);
    throw new Error('Failed to fetch analytics data');
  }
}

// Project Functions
export async function addProject(projectData: {
  title: string;
  description?: string;
  image_url?: string;
  github_url?: string;
  live_url?: string;
  technologies?: string[];
  featured?: boolean;
}): Promise<Record<string, unknown>> {
  try {
    const result = await sql`
      INSERT INTO projects (
        title, description, image_url, github_url, live_url, technologies, featured
      )
      VALUES (
        ${projectData.title}, ${projectData.description}, ${projectData.image_url || null},
        ${projectData.github_url || null}, ${projectData.live_url || null},
        ${JSON.stringify(projectData.technologies || [])}, ${projectData.featured || false}
      )
      RETURNING *
    `;
    return result[0];
  } catch (error) {
    console.error('Database error adding project:', error);
    throw new Error('Failed to add project');
  }
}

export async function initializeDatabase(): Promise<void> {
  try {
    // Check if tables exist and create if needed
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        image_url VARCHAR(500),
        github_url VARCHAR(500),
        live_url VARCHAR(500),
        technologies JSONB,
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS page_views (
        id SERIAL PRIMARY KEY,
        page VARCHAR(255) NOT NULL,
        user_agent TEXT,
        ip_address INET,
        viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw new Error('Failed to initialize database');
  }
}

// Utility Functions
export async function testConnection(): Promise<boolean> {
  try {
    await sql`SELECT 1 as test`;
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  }
}
