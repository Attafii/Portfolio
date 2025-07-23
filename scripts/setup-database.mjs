import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in .env.local');
}

const sql = neon(process.env.DATABASE_URL);
const __dirname = dirname(fileURLToPath(import.meta.url));

async function setupDatabase() {
  console.log('🚀 Setting up Neon Database for Ahmed Attafi Portfolio...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful!\n');

    // Read and execute schema.sql
    console.log('📋 Creating database tables from schema.sql...');
    const schemaPath = join(__dirname, '..', 'database', 'schema.sql');
    const schemaSQL = readFileSync(schemaPath, 'utf8');
    
    // Split the schema into individual statements and execute them
    const statements = schemaSQL
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0 && !stmt.startsWith('--'));
    
    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await sql.unsafe(statement);
        } catch (error) {
          // Ignore "already exists" errors
          if (!error.message.includes('already exists')) {
            console.error(`Error executing statement: ${statement.substring(0, 100)}...`);
            throw error;
          }
        }
      }
    }
    
    console.log('✅ Database schema applied successfully!\n');

    // Check what was created
    console.log('🔍 Verifying database setup...');
    
    const tables = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `;
    
    console.log('📊 Created tables:');
    tables.forEach(table => {
      console.log(`   ✅ ${table.table_name}`);
    });
    
    // Get sample data counts
    const contactsCount = await sql`SELECT COUNT(*) as count FROM contact_messages`;
    const projectsCount = await sql`SELECT COUNT(*) as count FROM projects`;
    const skillsCount = await sql`SELECT COUNT(*) as count FROM skills`;
    const blogCount = await sql`SELECT COUNT(*) as count FROM blog_posts`;
    
    console.log('\n📈 Sample data loaded:');
    console.log(`   📧 Contact messages: ${contactsCount[0].count}`);
    console.log(`   🚀 Projects: ${projectsCount[0].count}`);
    console.log(`   💪 Skills: ${skillsCount[0].count}`);
    console.log(`   📝 Blog posts: ${blogCount[0].count}`);

    console.log('\n🎉 Neon Database setup complete!');
    console.log('\n🌟 Your portfolio features:');
    console.log('   ✅ Contact form with database storage');
    console.log('   ✅ Dynamic project management');
    console.log('   ✅ Skills showcase with levels');
    console.log('   ✅ Blog system (ready for content)');
    console.log('   ✅ Newsletter subscriptions');
    console.log('   ✅ Analytics tracking');
    console.log('   ✅ Performance indexes');

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Check your DATABASE_URL in .env.local');
    console.log('   2. Ensure your Neon database is running');
    console.log('   3. Verify your internet connection');
    console.log('   4. Check database permissions');
    process.exit(1);
  }
}

// Run the setup
setupDatabase();
