// Google Analytics 4 tracking utilities
interface GtagFunction {
  (...args: (string | object)[]): void;
}

interface DataLayerObject {
  [key: string]: string | number | boolean | object | undefined;
}

declare global {
  interface Window {
    gtag: GtagFunction;
    dataLayer: DataLayerObject[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({ 
  action, 
  category, 
  label, 
  value 
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag && GA_TRACKING_ID) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event tracking functions
export const trackContactForm = (method: 'email' | 'form') => {
  event({
    action: 'contact_initiated',
    category: 'engagement',
    label: method,
  });
};

export const trackProjectView = (projectName: string) => {
  event({
    action: 'project_view',
    category: 'portfolio',
    label: projectName,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: 'download',
    category: 'engagement',
    label: fileName,
  });
};

export const trackExternalLink = (url: string, linkText?: string) => {
  event({
    action: 'external_link_click',
    category: 'outbound',
    label: linkText || url,
  });
};

export const trackSkillInteraction = (skillName: string) => {
  event({
    action: 'skill_interaction',
    category: 'skills',
    label: skillName,
  });
};

export const trackThemeChange = (theme: 'dark' | 'light' | 'system') => {
  event({
    action: 'theme_change',
    category: 'preferences',
    label: theme,
  });
};

export const trackChatbotInteraction = (action: 'open' | 'close' | 'message_sent') => {
  event({
    action: 'chatbot_interaction',
    category: 'ai_assistant',
    label: action,
  });
};

// Performance monitoring
export const trackWebVitals = (metric: { name: string; value: number; id: string; delta: number }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
};
