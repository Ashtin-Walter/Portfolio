// Performance monitoring utilities
export const measurePerformance = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      console.log(`Page load time: ${loadTime}ms`);
      return loadTime;
    }
    return null;
  },

  // Measure component render time
  measureRender: (componentName, startTime) => {
    if (typeof window !== 'undefined' && window.performance) {
      const endTime = window.performance.now();
      const renderTime = endTime - startTime;
      console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      return renderTime;
    }
    return null;
  },

  // Measure scroll performance
  measureScrollPerformance: () => {
    let scrollStart = null;
    let scrollTimeout = null;

    const handleScrollStart = () => {
      if (!scrollStart) {
        scrollStart = window.performance.now();
      }
    };

    const handleScrollEnd = () => {
      if (scrollStart) {
        const scrollTime = window.performance.now() - scrollStart;
        console.log(`Scroll duration: ${scrollTime.toFixed(2)}ms`);
        scrollStart = null;
      }
    };

    const throttledScrollHandler = () => {
      handleScrollStart();
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      scrollTimeout = setTimeout(handleScrollEnd, 150);
    };

    return {
      start: () => {
        window.addEventListener('scroll', throttledScrollHandler, { passive: true });
      },
      stop: () => {
        window.removeEventListener('scroll', throttledScrollHandler);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      }
    };
  },

  // Log Core Web Vitals
  logWebVitals: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });
    }
  }
};

// Debounce utility for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};