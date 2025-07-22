#!/usr/bin/env node

/**
 * Database Setup Script for Ahmed Attafi Portfolio
 * This script initializes the Neon database with required tables
 */

import { initializeDatabase, testConnection } from '../src/lib/db.js';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function setupDatabase() {
  console.log('🚀 Setting up Ahmed Attafi Portfolio Database...\n');

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

    console.log('🎉 Database setup complete!');
    console.log('\n📊 Your portfolio now has:');
    console.log('   ✅ contacts - Store contact form submissions');
    console.log('   ✅ projects - Manage portfolio projects');
    console.log('   ✅ blog_posts - Future blog functionality');
    console.log('   ✅ page_views - Analytics tracking');
    console.log('\n🌟 Your contact form will now save messages to the database!');

  } catch (error) {
    console.error('❌ Database setup failed:', error);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Check your DATABASE_URL in .env.local');
    console.log('   2. Ensure your Neon database is running');
    console.log('   3. Verify your internet connection');
    process.exit(1);
  }
}

// Run the setup
setupDatabase();
