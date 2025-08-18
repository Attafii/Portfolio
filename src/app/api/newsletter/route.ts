import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { subscribeToNewsletter, isEmailSubscribed } from '@/lib/db';

// Initialize Resend with your API key
const resend = new Resend('re_Zw1bhMHH_6HiCRrHsA7eSEStAHWU9Z5dD');

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if email is already subscribed
    const alreadySubscribed = await isEmailSubscribed(email);
    if (alreadySubscribed) {
      return NextResponse.json(
        { error: 'This email is already subscribed to our newsletter' },
        { status: 409 }
      );
    }

    // Subscribe to newsletter in database
    const subscriber = await subscribeToNewsletter(email);

    // Send welcome email via Resend
    try {
      await resend.emails.send({
        from: 'Ahmed Attafi <hello@attafii.dev>',
        to: [email],
        subject: '🎉 Welcome to Ahmed Attafi\'s Newsletter!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Ahmed Attafi's Newsletter</title>
            </head>
            <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f8fafc;">
              <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #3b82f6, #06b6d4); padding: 40px 30px; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">Welcome Aboard! 🚀</h1>
                  <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Thanks for joining Ahmed Attafi's Newsletter</p>
                </div>

                <!-- Content -->
                <div style="padding: 40px 30px;">
                  <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px;">Hey there! 👋</h2>
                  
                  <p style="color: #475569; margin: 0 0 20px 0; font-size: 16px;">
                    I'm thrilled to have you join our community of developers and tech enthusiasts! 
                    You've just secured your spot for exclusive insights, resources, and behind-the-scenes content.
                  </p>

                  <div style="background: linear-gradient(135deg, #eff6ff, #f0f9ff); border-radius: 12px; padding: 25px; margin: 30px 0; border-left: 4px solid #3b82f6;">
                    <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; display: flex; align-items: center;">
                      🎁 Your Welcome Gift
                    </h3>
                    <p style="color: #475569; margin: 0 0 15px 0;">
                      As a new subscriber, you get access to my <strong>Free Starter Template Pack</strong> including:
                    </p>
                    <ul style="color: #475569; margin: 0; padding-left: 20px;">
                      <li>React TypeScript Boilerplate</li>
                      <li>Next.js Project Template</li>
                      <li>Tailwind CSS Components</li>
                      <li>Database Schema Templates</li>
                    </ul>
                  </div>

                  <h3 style="color: #1e293b; margin: 30px 0 15px 0; font-size: 20px;">What to Expect 📬</h3>
                  
                  <div style="display: grid; gap: 15px;">
                    <div style="display: flex; align-items: flex-start; gap: 12px;">
                      <div style="background: #dbeafe; border-radius: 8px; padding: 8px; flex-shrink: 0;">
                        <span style="color: #1d4ed8; font-size: 16px;">📈</span>
                      </div>
                      <div>
                        <strong style="color: #1e293b;">Weekly Tech Insights</strong>
                        <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Latest trends, tools, and techniques in web development</p>
                      </div>
                    </div>
                    
                    <div style="display: flex; align-items: flex-start; gap: 12px;">
                      <div style="background: #dbeafe; border-radius: 8px; padding: 8px; flex-shrink: 0;">
                        <span style="color: #1d4ed8; font-size: 16px;">🔧</span>
                      </div>
                      <div>
                        <strong style="color: #1e293b;">Exclusive Resources</strong>
                        <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Code snippets, templates, and tools you won't find anywhere else</p>
                      </div>
                    </div>
                    
                    <div style="display: flex; align-items: flex-start; gap: 12px;">
                      <div style="background: #dbeafe; border-radius: 8px; padding: 8px; flex-shrink: 0;">
                        <span style="color: #1d4ed8; font-size: 16px;">🚀</span>
                      </div>
                      <div>
                        <strong style="color: #1e293b;">Project Updates</strong>
                        <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Behind-the-scenes content and case studies from my projects</p>
                      </div>
                    </div>
                  </div>

                  <div style="text-align: center; margin: 40px 0;">
                    <a href="https://attafii.dev" style="background: linear-gradient(135deg, #3b82f6, #06b6d4); color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; display: inline-block;">
                      Visit My Portfolio 🌟
                    </a>
                  </div>

                  <p style="color: #475569; margin: 30px 0 20px 0; font-size: 16px;">
                    Feel free to reply to this email if you have any questions or suggestions. 
                    I read and respond to every message!
                  </p>

                  <p style="color: #475569; margin: 0; font-size: 16px;">
                    Best regards,<br>
                    <strong style="color: #1e293b;">Ahmed Attafi</strong><br>
                    <span style="color: #64748b; font-size: 14px;">Full Stack Developer & IoT Engineer</span>
                  </p>
                </div>

                <!-- Footer -->
                <div style="background: #f1f5f9; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                  <div style="margin-bottom: 20px;">
                    <a href="https://attafii.dev" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">Portfolio</a>
                    <a href="https://github.com/attafii" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">GitHub</a>
                    <a href="https://linkedin.com/in/ahmed-attafi" style="color: #3b82f6; text-decoration: none; margin: 0 10px;">LinkedIn</a>
                  </div>
                  
                  <p style="color: #64748b; margin: 0 0 10px 0; font-size: 12px;">
                    You're receiving this because you subscribed to Ahmed Attafi's Newsletter.
                  </p>
                  <p style="color: #64748b; margin: 0; font-size: 12px;">
                    Don't want these emails? <a href="#" style="color: #3b82f6;">Unsubscribe</a>
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError);
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      subscriber: {
        id: subscriber.id,
        email: subscriber.email,
        subscribed_at: subscriber.subscribed_at
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle unsubscribe requests
export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // You would implement unsubscribe logic here
    // For now, just return success
    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    
    return NextResponse.json(
      { error: 'Failed to unsubscribe. Please try again.' },
      { status: 500 }
    );
  }
}
