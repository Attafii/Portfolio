// Test script for the chat API
async function testChat() {
  console.log('🧪 Testing Chat API with compound-beta model...\n');
  
  const testMessages = [
    'Hello!',
    'Who is Ahmed?',
    'What services does Ahmed offer?',
    'Tell me about Ahmed\'s skills'
  ];
  
  for (let i = 0; i < testMessages.length; i++) {
    const message = testMessages[i];
    console.log(`📤 Test ${i + 1}: "${message}"`);
    
    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          conversationHistory: []
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log(`✅ Response: ${result.reply.substring(0, 100)}${result.reply.length > 100 ? '...' : ''}`);
        if (result.fallback) {
          console.log('⚠️  Using fallback response');
        } else {
          console.log('🤖 AI model responded successfully');
        }
      } else {
        console.log(`❌ Error: ${result.error}`);
      }
      
    } catch (error) {
      console.log(`❌ Request failed: ${error.message}`);
    }
    
    console.log('---');
    
    // Wait 2 seconds between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

// Wait for server to start, then test
setTimeout(testChat, 8000);
