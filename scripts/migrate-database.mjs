import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in .env.local');
}

const sql = neon(process.env.DATABASE_URL);

async function runMigration() {
  try {
    console.log('🚀 Starting database migration...');
    
    // Test connection first
    await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful');
    
    // Check if tables exist and have data
    const contactsCount = await sql`
      SELECT COUNT(*) as count 
      FROM contact_messages
    `;
    
    const projectsCount = await sql`
      SELECT COUNT(*) as count 
      FROM projects  
    `;
    
    const skillsCount = await sql`
      SELECT COUNT(*) as count 
      FROM skills
    `;
    
    console.log(`📊 Current data:`);
    console.log(`   - Contact messages: ${contactsCount[0].count}`);
    console.log(`   - Projects: ${projectsCount[0].count}`);
    console.log(`   - Skills: ${skillsCount[0].count}`);
    
    // Add any missing indexes
    console.log('🔧 Adding performance indexes...');
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
      ON contact_messages(created_at DESC)
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_projects_featured 
      ON projects(featured, created_at DESC)
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_projects_category 
      ON projects(category)
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at 
      ON blog_posts(published_at DESC)
    `;
    
    await sql`
      CREATE INDEX IF NOT EXISTS idx_skills_category 
      ON skills(category)
    `;
    
    console.log('✅ Performance indexes added');
    
    // Verify sample data exists
    if (Number(projectsCount[0].count) === 0) {
      console.log('📝 No projects found, this is expected for a fresh database');
      console.log('   Sample projects are already defined in schema.sql');
    }
    
    if (Number(skillsCount[0].count) === 0) {
      console.log('📝 No skills found, this is expected for a fresh database');
      console.log('   Sample skills are already defined in schema.sql');
    }
    
    console.log('🎉 Database migration completed successfully!');
    console.log('');
    console.log('📋 Next steps:');
    console.log('   1. Your database is ready for the admin dashboard');
    console.log('   2. Sample data is available if this is a fresh installation');
    console.log('   3. All indexes are optimized for performance');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

runMigration();
