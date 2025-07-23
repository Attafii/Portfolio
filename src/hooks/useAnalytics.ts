'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export const useAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && pathname) {
      pageview(window.location.origin + pathname);
    }
  }, [pathname]);
};

export default useAnalytics;
