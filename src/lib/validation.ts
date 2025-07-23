import { z } from 'zod';

// Chat API validation schema
export const chatSchema = z.object({
  message: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(1000, 'Message is too long (max 1000 characters)')
    .trim(),
  conversationHistory: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().min(1).max(2000),
      })
    )
    .max(20, 'Too many messages in history')
    .optional()
    .default([]),
});

// Contact form validation schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name is too long (max 100 characters)')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name contains invalid characters')
    .trim(),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .toLowerCase()
    .trim(),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters long')
    .max(200, 'Subject is too long (max 200 characters)')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(5000, 'Message is too long (max 5000 characters)')
    .trim(),
});

// Helper function to validate and return formatted error response
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data);
  
  if (!result.success) {
    const errors = result.error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
    }));
    
    return {
      success: false,
      errors,
      data: null,
    };
  }
  
  return {
    success: true,
    errors: null,
    data: result.data,
  };
}

// Newsletter subscription schema (for future use)
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .toLowerCase()
    .trim(),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(100, 'Name is too long')
    .optional()
    .transform(val => val?.trim()),
});

export type ChatRequest = z.infer<typeof chatSchema>;
export type ContactRequest = z.infer<typeof contactSchema>;
export type NewsletterRequest = z.infer<typeof newsletterSchema>;
