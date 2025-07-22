import { initializeDatabase, testConnection } from '../src/lib/db.js';

async function setupDatabase() {
  console.log('🚀 Setting up Neon Database for Ahmed Attafi Portfolio...\n');

  try {
    // Test connection
    console.log('📡 Testing database connection...');
    const isConnected = await testConnection();
    
    if (!isConnected) {
      throw new Error('Failed to connect to database. Please check your DATABASE_URL.');
    }
    console.log('✅ Database connection successful!\n');

    // Initialize tables
    console.log('📋 Creating database tables...');
    await initializeDatabase();
    console.log('✅ Database tables created successfully!\n');

    console.log('🎉 Neon Database setup complete!');
    console.log('\n📊 Your portfolio now has these tables:');
    console.log('   ✅ contacts - Store contact form submissions');
    console.log('   ✅ projects - Manage portfolio projects');
    console.log('   ✅ blog_posts - Future blog functionality');
    console.log('   ✅ page_views - Analytics tracking');
    console.log('\n🌟 Your contact form will now save messages to Neon database!');
    console.log('🔗 Database URL:', process.env.DATABASE_URL?.substring(0, 50) + '...');

  } catch (error) {
    console.error('❌ Database setup failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Check your DATABASE_URL in .env.local');
    console.log('   2. Ensure your Neon database is running');
    console.log('   3. Verify your internet connection');
    process.exit(1);
  }
}

// Run the setup
setupDatabase();
