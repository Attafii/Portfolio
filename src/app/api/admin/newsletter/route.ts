import { NextRequest, NextResponse } from 'next/server';
import { getNewsletterStats } from '@/lib/db';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function GET() {
  try {
    // Get newsletter stats and subscribers
    const stats = await getNewsletterStats();
    
    const subscribers = await sql`
      SELECT id, email, active, subscribed_at, unsubscribed_at
      FROM newsletter_subscribers 
      ORDER BY subscribed_at DESC
    `;

    return NextResponse.json({ 
      stats,
      subscribers: subscribers.map(sub => ({
        id: Number(sub.id),
        email: String(sub.email),
        active: Boolean(sub.active),
        subscribed_at: String(sub.subscribed_at),
        unsubscribed_at: sub.unsubscribed_at ? String(sub.unsubscribed_at) : null
      }))
    });
  } catch (error) {
    console.error('Error fetching newsletter data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter data' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    
    if (!id) {
      return NextResponse.json(
        { error: 'Subscriber ID is required' },
        { status: 400 }
      );
    }

    await sql`DELETE FROM newsletter_subscribers WHERE id = ${id}`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting subscriber:', error);
    return NextResponse.json(
      { error: 'Failed to delete subscriber' },
      { status: 500 }
    );
  }
}
