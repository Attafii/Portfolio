import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { chatRatelimit, getClientIP, simpleRateLimit } from '@/lib/rate-limit';
import { chatSchema, validateRequest } from '@/lib/validation';

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
    // Rate limiting
    const clientIP = getClientIP(request);
    
    let rateLimitResult;
    
    if (chatRatelimit) {
      try {
        // Try Redis-based rate limiting
        rateLimitResult = await chatRatelimit.limit(clientIP);
      } catch (error) {
        console.log('Redis rate limiting failed, using fallback:', error);
        // Fallback to in-memory rate limiting
        rateLimitResult = simpleRateLimit(clientIP, 10, 10000); // 10 requests per 10 seconds
      }
    } else {
      // Use in-memory rate limiting
      rateLimitResult = simpleRateLimit(clientIP, 10, 10000); // 10 requests per 10 seconds
    }
    
    if (!rateLimitResult.success) {
      const resetTime = rateLimitResult.reset instanceof Date 
        ? rateLimitResult.reset.getTime() 
        : rateLimitResult.reset;
      const resetISO = rateLimitResult.reset instanceof Date 
        ? rateLimitResult.reset.toISOString() 
        : new Date(rateLimitResult.reset).toISOString();
        
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please wait before sending another message.',
          retryAfter: Math.ceil((resetTime - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': resetISO,
          }
        }
      );
    }

    const requestBody = await request.json();
    
    // Validate input
    const validation = validateRequest(chatSchema, requestBody);
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Invalid input', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }
    
    const { message, conversationHistory } = validation.data!;

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
      ...(conversationHistory || []).slice(-10), // Keep last 10 messages for context
      {
        role: 'user' as const,
        content: message
      }
    ];

    // Call Groq API with a reliable model
    let completion;
    try {
      console.log('Calling Groq API with model: compound-beta');
      completion = await groq.chat.completions.create({
        model: 'compound-beta',
        messages,
        max_tokens: 1024,
        temperature: 0.7,
        top_p: 1,
        stream: false
      });
      console.log('Groq API call successful');
      
      // Check if the response is actually valid JSON from Groq
      if (!completion || !completion.choices || !completion.choices[0]) {
        throw new Error('Invalid response from Groq API');
      }
    } catch (apiError) {
      // If API fails, provide helpful fallback responses
      console.error('Groq API call failed:', apiError);
      
      // Simple keyword-based responses as fallback
      const lowerMessage = message.toLowerCase();
      let fallbackReply = "";
      
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        fallbackReply = "Hello! I'm Ahmed's AI assistant. Ahmed is a skilled full-stack developer from Tunisia specializing in IoT, web development, and automotive software. He's available for projects and would love to hear from you at attafiahmed.dev@gmail.com!";
      } else if (lowerMessage.includes('ahmed') || lowerMessage.includes('who')) {
        fallbackReply = "Ahmed Attafi is a passionate full-stack developer from Tunisia 🇹🇳. He specializes in IoT development, web applications (React, Next.js), mobile apps, and automotive software. With expertise in modern technologies and a focus on clean, efficient code, Ahmed is available for freelance projects worldwide. Contact him at attafiahmed.dev@gmail.com!";
      } else if (lowerMessage.includes('service') || lowerMessage.includes('work') || lowerMessage.includes('project')) {
        fallbackReply = "Ahmed offers comprehensive development services: Full-stack web development, mobile app development, IoT solutions, automotive software, technical consulting, and more. He works with React, Next.js, Node.js, Python, Arduino, and modern cloud technologies. Ready to bring your ideas to life! Contact: attafiahmed.dev@gmail.com";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        fallbackReply = "You can reach Ahmed at: 📧 attafiahmed.dev@gmail.com. He's based in Tunisia but works with clients worldwide. Response time is usually within 24 hours. Feel free to discuss your project ideas or just say hello!";
      } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
        fallbackReply = "Ahmed's expertise includes: IoT & Embedded Systems, Full-Stack Development (React, Next.js, Node.js), Mobile Apps (React Native, Flutter), Automotive Software, Databases (PostgreSQL, MongoDB), Cloud Services (AWS, Azure), AI/ML Integration, and Hardware Programming (Arduino, Raspberry Pi). Always learning and staying current with tech trends!";
      } else {
        fallbackReply = "I'm Ahmed's AI assistant, but I'm having some connection issues right now. Ahmed is a talented full-stack developer from Tunisia specializing in IoT, web development, and innovative software solutions. For any questions about his work or to discuss projects, please contact him directly at attafiahmed.dev@gmail.com. He'd love to hear from you!";
      }
      
      return NextResponse.json({
        reply: fallbackReply,
        success: true,
        fallback: true
      });
    }

    // If we get here, the API call was successful
    console.log('Groq API response:', JSON.stringify(completion, null, 2));
    
    const reply = completion?.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
    
    console.log('Extracted reply:', reply);

    return NextResponse.json({
      reply,
      success: true
    });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Handle different types of errors
    if (error instanceof Error) {
      // SSL/Certificate errors
      if (error.message.includes('certificate') || error.message.includes('CERT')) {
        return NextResponse.json({
          reply: "I'm experiencing some technical difficulties with the secure connection. Please try again in a moment, or feel free to contact Ahmed directly at attafiahmed.dev@gmail.com for immediate assistance!",
          success: false,
          error: 'SSL Certificate Error'
        });
      }
      
      // API key errors
      if (error.message.includes('401') || error.message.includes('unauthorized')) {
        return NextResponse.json({
          reply: "I'm having trouble connecting to my AI service. Please contact Ahmed directly at attafiahmed.dev@gmail.com - he'd love to hear from you!",
          success: false,
          error: 'Authentication Error'
        });
      }
      
      // Network errors
      if (error.message.includes('fetch') || error.message.includes('network')) {
        return NextResponse.json({
          reply: "I'm currently offline, but Ahmed is always available! Feel free to reach out to him directly at attafiahmed.dev@gmail.com or through the contact form below.",
          success: false,
          error: 'Network Error'
        });
      }
      
      return NextResponse.json(
        { 
          reply: "I'm experiencing some technical difficulties. Please contact Ahmed directly at attafiahmed.dev@gmail.com - he responds quickly and would love to help!",
          success: false,
          error: `Chat service error: ${error.message}` 
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        reply: "Something unexpected happened. Please reach out to Ahmed directly at attafiahmed.dev@gmail.com for immediate assistance!",
        success: false,
        error: 'An unexpected error occurred' 
      },
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
