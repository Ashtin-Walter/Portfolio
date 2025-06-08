// Declare global gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics
export const GA_TRACKING_ID = 'G-Q5ZQHKXJJ7';

// Initialize Google Analytics
export const initGA = () => {
  // Initialize dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    // Create gtag function
    window.gtag = function(...args) {
      window.dataLayer.push(arguments);
    };
    // Initialize GA
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
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
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Performance monitoring
export const trackWebVitals = ({ 
  name, 
  delta, 
  value, 
  id 
}: {
  name: string;
  delta: number;
  value: number;
  id: string;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', name, {
      event_category: 'Web Vitals',
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      event_label: id,
      non_interaction: true,
    });
  }
};

// Error tracking
export const trackError = (error: Error) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'error', {
      event_category: 'Error',
      event_label: error.message,
      non_interaction: true,
    });
  }
};
