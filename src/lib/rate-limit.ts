import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Check if Redis environment variables are configured
const isRedisConfigured = () => {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
};

// Create Redis-based rate limiters only if configured
let chatRatelimit: Ratelimit | null = null;
let contactRatelimit: Ratelimit | null = null;

if (isRedisConfigured()) {
  try {
    const redis = Redis.fromEnv();
    
    // Create a new ratelimiter, that allows 10 requests per 10 seconds for chat
    chatRatelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, '10 s'),
      analytics: true,
      prefix: 'portfolio_chat',
    });

    // Create a new ratelimiter, that allows 5 requests per 60 seconds for contact form
    contactRatelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '60 s'),
      analytics: true,
      prefix: 'portfolio_contact',
    });
    
    console.log('✅ Redis rate limiting initialized');
  } catch (error) {
    console.log('⚠️ Redis rate limiting failed to initialize, using fallback:', error);
  }
} else {
  console.log('ℹ️ Redis not configured, using in-memory rate limiting');
}

export { chatRatelimit, contactRatelimit };

// Fallback in-memory rate limiting if Redis is not configured
const memoryLimiter = new Map();

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  // Fallback for development
  return 'unknown';
}

// Simple in-memory rate limiter as fallback
export function simpleRateLimit(
  identifier: string, 
  maxRequests: number, 
  windowMs: number
): { success: boolean; limit: number; remaining: number; reset: Date } {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  if (!memoryLimiter.has(identifier)) {
    memoryLimiter.set(identifier, []);
  }
  
  const requests = memoryLimiter.get(identifier);
  
  // Remove old requests outside the window
  const validRequests = requests.filter((timestamp: number) => timestamp > windowStart);
  
  if (validRequests.length >= maxRequests) {
    return {
      success: false,
      limit: maxRequests,
      remaining: 0,
      reset: new Date(validRequests[0] + windowMs),
    };
  }
  
  // Add current request
  validRequests.push(now);
  memoryLimiter.set(identifier, validRequests);
  
  return {
    success: true,
    limit: maxRequests,
    remaining: maxRequests - validRequests.length,
    reset: new Date(now + windowMs),
  };
}
