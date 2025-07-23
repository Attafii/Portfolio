// Test Groq API directly
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || 'your-api-key-here'
});

async function testGroq() {
  try {
    console.log('Testing Groq API...');
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: 'Say hello'
        }
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 100
    });

    console.log('✅ Groq API works!');
    console.log('Response:', completion.choices[0]?.message?.content);
    
  } catch (error) {
    console.log('❌ Groq API Error:', error.message);
  }
}

testGroq();
