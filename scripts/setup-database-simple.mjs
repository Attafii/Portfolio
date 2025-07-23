import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be set in .env.local');
}

const sql = neon(process.env.DATABASE_URL);

async function setupDatabase() {
  console.log('🚀 Setting up Neon Database for Ahmed Attafi Portfolio...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    await sql`SELECT 1 as test`;
    console.log('✅ Database connection successful!\n');

    // Create tables one by one
    console.log('📋 Creating database tables...');
    
    // Contact messages table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(500) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        read_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
        replied_at TIMESTAMP WITH TIME ZONE DEFAULT NULL
      )
    `;
    console.log('   ✅ contact_messages table');

    // Projects table
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        long_description TEXT,
        category VARCHAR(100) NOT NULL,
        technologies JSONB NOT NULL DEFAULT '[]'::jsonb,
        features JSONB NOT NULL DEFAULT '[]'::jsonb,
        image_url VARCHAR(500),
        github_url VARCHAR(500),
        demo_url VARCHAR(500),
        status VARCHAR(50) DEFAULT 'Completed',
        featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('   ✅ projects table');

    // Blog posts table
    await sql`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        tags JSONB NOT NULL DEFAULT '[]'::jsonb,
        read_time VARCHAR(20),
        published_at TIMESTAMP WITH TIME ZONE,
        featured BOOLEAN DEFAULT FALSE,
        external_url VARCHAR(500),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('   ✅ blog_posts table');

    // Skills table
    await sql`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(100) NOT NULL,
        level INTEGER NOT NULL CHECK (level >= 0 AND level <= 100),
        color VARCHAR(50) DEFAULT 'bg-primary',
        icon VARCHAR(100),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('   ✅ skills table');

    // Newsletter subscribers table
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        unsubscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NULL,
        active BOOLEAN DEFAULT TRUE
      )
    `;
    console.log('   ✅ newsletter_subscribers table');

    // Site analytics table
    await sql`
      CREATE TABLE IF NOT EXISTS site_analytics (
        id SERIAL PRIMARY KEY,
        page_path VARCHAR(500) NOT NULL,
        visitor_ip VARCHAR(45),
        user_agent TEXT,
        referrer VARCHAR(500),
        visited_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;
    console.log('   ✅ site_analytics table');

    // Create indexes
    console.log('\n🔧 Creating performance indexes...');
    await sql`CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured, created_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_projects_category ON projects(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured, published_at DESC)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_site_analytics_visited_at ON site_analytics(visited_at DESC)`;
    console.log('   ✅ All indexes created');

    // Insert sample data
    console.log('\n📊 Inserting sample data...');
    
    // Check if sample projects already exist
    const existingProjects = await sql`SELECT COUNT(*) as count FROM projects`;
    if (Number(existingProjects[0].count) === 0) {
      await sql`
        INSERT INTO projects (title, slug, description, long_description, category, technologies, features, github_url, demo_url, status, featured) VALUES
        ('IoT Smart Home System', 'iot-smart-home-system', 'Complete home automation system with Arduino, sensors, and React dashboard for monitoring and controlling home devices remotely.', 'A comprehensive IoT solution featuring multiple Arduino-based sensor nodes, real-time data visualization, mobile app integration, and voice control capabilities. The system monitors temperature, humidity, motion, and lighting while providing automated responses and remote control features.', 'IoT', '["Arduino", "React", "Firebase", "Node.js", "WebSockets", "ESP32"]', '["Real-time sensor monitoring", "Mobile app integration", "Voice control via Alexa", "Energy consumption tracking", "Automated lighting system", "Security alert system"]', 'https://github.com/Attafii/iot-smart-home', 'https://smart-home-demo.vercel.app', 'Completed', true),
        ('Automotive Testing Suite', 'automotive-testing-suite', 'Comprehensive C# testing framework for automotive software validation with automated test generation and reporting.', 'An enterprise-grade testing framework built specifically for automotive software systems. Features automated test case generation, comprehensive reporting, integration with CI/CD pipelines, and support for multiple automotive protocols and standards.', 'Automotive', '["C#", ".NET", "Azure DevOps", "Jenkins", "XML", "SQL Server"]', '["Automated test generation", "Comprehensive reporting", "CI/CD integration", "Multi-protocol support", "Performance benchmarking", "Compliance validation"]', 'https://github.com/Attafii/automotive-testing-suite', null, 'In Development', true),
        ('Real-time Sensor Network', 'realtime-sensor-network', 'Industrial IoT dashboard for monitoring distributed sensor networks with real-time data visualization and alerting.', 'A scalable IoT platform designed for industrial environments featuring real-time data collection from multiple sensor types, advanced analytics, predictive maintenance capabilities, and comprehensive alerting systems.', 'IoT', '["Python", "InfluxDB", "Grafana", "MQTT", "Docker", "Kubernetes"]', '["Real-time data visualization", "Predictive analytics", "Custom alerting rules", "Historical data analysis", "Multi-tenant architecture", "API-first design"]', 'https://github.com/Attafii/sensor-network', 'https://sensor-network-demo.herokuapp.com', 'Completed', false)
      `;
      console.log('   ✅ Sample projects inserted');
    } else {
      console.log('   ℹ️ Projects already exist, skipping sample data');
    }

    // Check if sample skills already exist
    const existingSkills = await sql`SELECT COUNT(*) as count FROM skills`;
    if (Number(existingSkills[0].count) === 0) {
      await sql`
        INSERT INTO skills (name, category, level, color, icon) VALUES
        ('React/Next.js', 'frontend', 90, 'bg-blue-500', 'Globe'),
        ('TypeScript', 'frontend', 85, 'bg-blue-600', 'Code2'),
        ('JavaScript', 'frontend', 95, 'bg-yellow-500', 'Code2'),
        ('Node.js', 'backend', 85, 'bg-green-500', 'Server'),
        ('Python', 'backend', 90, 'bg-blue-600', 'Server'),
        ('C#', 'backend', 88, 'bg-purple-600', 'Server'),
        ('Arduino', 'iot', 95, 'bg-teal-500', 'Cpu'),
        ('Raspberry Pi', 'iot', 88, 'bg-red-500', 'Cpu'),
        ('Azure', 'cloud', 85, 'bg-blue-500', 'Cloud'),
        ('Firebase', 'cloud', 88, 'bg-orange-500', 'Cloud'),
        ('Test Automation', 'testing', 90, 'bg-red-500', 'TestTube'),
        ('Quality Assurance', 'testing', 95, 'bg-emerald-500', 'TestTube')
      `;
      console.log('   ✅ Sample skills inserted');
    } else {
      console.log('   ℹ️ Skills already exist, skipping sample data');
    }

    // Get final counts
    const contactsCount = await sql`SELECT COUNT(*) as count FROM contact_messages`;
    const projectsCount = await sql`SELECT COUNT(*) as count FROM projects`;
    const skillsCount = await sql`SELECT COUNT(*) as count FROM skills`;
    const blogCount = await sql`SELECT COUNT(*) as count FROM blog_posts`;

    console.log('\n📈 Database summary:');
    console.log(`   📧 Contact messages: ${contactsCount[0].count}`);
    console.log(`   🚀 Projects: ${projectsCount[0].count}`);
    console.log(`   💪 Skills: ${skillsCount[0].count}`);
    console.log(`   📝 Blog posts: ${blogCount[0].count}`);

    console.log('\n🎉 Neon Database setup complete!');
    console.log('\n🌟 Your portfolio features:');
    console.log('   ✅ Contact form with database storage');
    console.log('   ✅ Dynamic project showcase');
    console.log('   ✅ Skills with proficiency levels');
    console.log('   ✅ Blog system (ready for content)');
    console.log('   ✅ Newsletter subscriptions');
    console.log('   ✅ Analytics tracking');
    console.log('   ✅ Performance optimized');

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
