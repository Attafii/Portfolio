import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { saveContact } from '@/lib/db'
import { contactRatelimit, getClientIP, simpleRateLimit } from '@/lib/rate-limit'
import { contactSchema, validateRequest } from '@/lib/validation'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    
    let rateLimitResult;
    
    if (contactRatelimit) {
      try {
        // Try Redis-based rate limiting
        rateLimitResult = await contactRatelimit.limit(clientIP);
      } catch (error) {
        console.log('Redis rate limiting failed, using fallback:', error);
        // Fallback to in-memory rate limiting
        rateLimitResult = simpleRateLimit(clientIP, 5, 60000); // 5 requests per 60 seconds
      }
    } else {
      // Use in-memory rate limiting
      rateLimitResult = simpleRateLimit(clientIP, 5, 60000); // 5 requests per 60 seconds
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
          error: 'Rate limit exceeded. Please wait before submitting another contact form.',
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
    const validation = validateRequest(contactSchema, requestBody);
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Invalid input', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }
    
    const { name, email, subject, message } = validation.data!

    // Save contact to database
    let savedContact;
    try {
      savedContact = await saveContact({ name, email, subject, message });
      console.log('Contact saved to database:', savedContact.id);
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Continue with email sending even if database save fails
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <div style="background: white; border-radius: 8px; padding: 30px; margin: 20px 0;">
            <h2 style="color: #333; margin-bottom: 20px; font-size: 24px;">New Contact Form Submission</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #667eea; margin-bottom: 15px; font-size: 18px;">Contact Details</h3>
              <p style="margin: 10px 0; color: #555;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0; color: #555;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0; color: #555;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
              <h3 style="color: #667eea; margin-bottom: 15px; font-size: 18px;">Message</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #999; font-size: 14px;">This email was sent from your portfolio contact form</p>
              <p style="color: #999; font-size: 14px;">Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }

    // Send auto-reply to the sender
    await resend.emails.send({
      from: 'Ahmed Attafi <onboarding@resend.dev>',
      to: [email],
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
          <div style="background: white; border-radius: 8px; padding: 30px; margin: 20px 0;">
            <h2 style="color: #333; margin-bottom: 20px; font-size: 24px;">Thank you for reaching out!</h2>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">Hi ${name},</p>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              Thank you for getting in touch! I have received your message and I am excited to learn more about your project.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #667eea; margin-bottom: 15px; font-size: 18px;">What happens next?</h3>
              <ul style="color: #555; line-height: 1.6; padding-left: 20px;">
                <li>I will review your message carefully</li>
                <li>You will hear back from me within 24 hours</li>
                <li>We can schedule a call to discuss your project in detail</li>
              </ul>
            </div>
            
            <p style="color: #555; line-height: 1.6; margin-bottom: 20px;">
              In the meantime, feel free to check out my latest projects on my portfolio or connect with me on social media.
            </p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
              <p style="color: #555; font-weight: bold;">Ahmed Attafi</p>
              <p style="color: #999; font-size: 14px;">Software Developer & IoT Specialist</p>
              <p style="color: #999; font-size: 14px;">Tunisia 🇹🇳 | Capgemini Engineering</p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { 
        message: 'Message sent successfully! Thank you for reaching out.',
        emailId: data?.id,
        contactId: savedContact?.id,
        success: true
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
