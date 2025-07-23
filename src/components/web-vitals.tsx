'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { trackWebVitals } from '@/lib/analytics';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Track Web Vitals in production
    if (process.env.NODE_ENV === 'production') {
      trackWebVitals(metric);
    }

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vital:', metric);
    }
  });

  return null; // This component doesn't render anything
}

export default WebVitals;
