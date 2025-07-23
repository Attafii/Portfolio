const crypto = require('crypto');

// Generate a secure random 32-byte key and encode it as base64
const authSecret = crypto.randomBytes(32).toString('base64');

console.log('🔑 Generated AUTH_SECRET:');
console.log(authSecret);
console.log('\n📋 Copy this value to your .env.local file:');
console.log(`AUTH_SECRET="${authSecret}"`);
