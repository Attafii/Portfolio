# Rate Limiting Setup Guide

## Overview
Your portfolio application now includes robust rate limiting to protect against abuse and spam. It supports both Redis-based rate limiting (for production) and in-memory rate limiting (for development).

## Current Status
✅ **In-Memory Rate Limiting**: Active (fallback system)  
⚠️ **Redis Rate Limiting**: Not configured (optional)

## Rate Limits
- **Chat API**: 10 requests per 10 seconds per IP
- **Contact Form**: 5 requests per 60 seconds per IP

## Redis Setup (Optional but Recommended for Production)

### Why Use Redis?
- **Persistence**: Rate limits survive server restarts
- **Scalability**: Works across multiple server instances
- **Analytics**: Built-in rate limiting analytics
- **Performance**: Faster than in-memory for high traffic

### Setup Steps

1. **Create Upstash Redis Account**
   - Go to [upstash.com](https://upstash.com)
   - Sign up for a free account
   - Create a new Redis database

2. **Get Your Credentials**
   ```
   UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
   UPSTASH_REDIS_REST_TOKEN=your-redis-token-here
   ```

3. **Add to Environment Variables**
   Update your `.env.local` file:
   ```env
   # Rate Limiting (Optional - Redis for production rate limiting)
   UPSTASH_REDIS_REST_URL="https://your-redis-url.upstash.io"
   UPSTASH_REDIS_REST_TOKEN="your-redis-token-here"
   ```

4. **Restart Your Application**
   ```bash
   npm run dev
   ```

### Verification
When Redis is properly configured, you'll see:
```
✅ Redis rate limiting initialized
```

When using fallback (current):
```
ℹ️ Redis not configured, using in-memory rate limiting
```

## Alternative Redis Providers
- **Upstash**: Recommended (serverless, free tier)
- **Redis Cloud**: Enterprise features
- **AWS ElastiCache**: If using AWS infrastructure
- **Self-hosted**: For full control

## Production Considerations
- Redis is recommended for production deployments
- In-memory rate limiting resets on server restart
- Consider increasing limits for authenticated users
- Monitor rate limit analytics in production

## Testing Rate Limits
You can test the rate limiting by:
1. Rapidly sending chat messages (will hit 10 req/10s limit)
2. Submitting contact forms quickly (will hit 5 req/60s limit)
3. Check browser network tab for 429 status codes

## Customization
Rate limits can be adjusted in `/src/lib/rate-limit.ts`:
```typescript
// Chat: 10 requests per 10 seconds
Ratelimit.slidingWindow(10, '10 s')

// Contact: 5 requests per 60 seconds  
Ratelimit.slidingWindow(5, '60 s')
```
