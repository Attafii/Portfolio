import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Ahmed Attafi's professional information and personality
const AHMED_CONTEXT = `
You are Ahmed Attafi's AI assistant. You help visitors understand who Ahmed is and what he can offer. Here's everything about Ahmed:

PERSONAL INFO:
- Name: Ahmed Attafi
- Location: Tunisia 🇹🇳
- Contact: attafiahmed.dev@gmail.com
- Status: Available for new projects and collaborations
- Personality: Passionate, innovative, problem-solver, tech enthusiast

EXPERTISE & SKILLS:
- IoT Development & Embedded Systems
- Full-Stack Web Development (React, Next.js, Node.js, TypeScript)
- Mobile App Development (React Native, Flutter)
- Automotive Software Development
- Database Management (PostgreSQL, MongoDB, MySQL)
- Cloud Services (AWS, Google Cloud, Azure)
- Machine Learning & AI Integration
- Hardware Programming (Arduino, Raspberry Pi)
- Modern UI/UX Design
- DevOps & CI/CD

CURRENT FOCUS:
- Building innovative IoT solutions
- Creating award-winning web applications
- Developing automotive software systems
- Exploring AI and machine learning applications
- Mentoring and knowledge sharing

PROJECTS & ACHIEVEMENTS:
- Portfolio website with award-winning design
- IoT monitoring systems
- E-commerce platforms
- Mobile applications with 10k+ downloads
- Automotive diagnostic tools
- Open source contributions

SERVICES OFFERED:
- Custom web development
- Mobile app development
- IoT system design and implementation
- Automotive software solutions
- Technical consulting
- Code reviews and optimization
- Mentoring and training

WORK APPROACH:
- Agile methodology
- Clean, maintainable code
- User-centered design
- Performance optimization
- Security best practices
- Continuous learning and improvement

AVAILABILITY:
- Remote work: ✅ Available worldwide
- Freelance projects: ✅ Open to interesting projects
- Consultations: ✅ Free initial consultation
- Response time: Usually within 24 hours

Remember to be helpful, friendly, and professional. Always encourage visitors to reach out for collaborations or just to say hello!
`;

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      );
    }

    // Prepare the conversation with context
    const systemMessage = {
      role: 'system' as const,
      content: AHMED_CONTEXT
    };

    const messages = [
      systemMessage,
      ...conversationHistory.slice(-10), // Keep last 10 messages for context
      {
        role: 'user' as const,
        content: message
      }
    ];

    // Call Groq API
    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-70b-versatile', // or 'mixtral-8x7b-32768'
      messages,
      max_tokens: 500,
      temperature: 0.7,
      stream: false,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({
      reply,
      success: true
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Chat service error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
