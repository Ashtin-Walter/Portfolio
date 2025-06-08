import { useEffect } from 'react';
import { event } from '../utils/analytics';

export const useTrackUserInteraction = (componentName) => {
  useEffect(() => {
    const trackScroll = () => {
      event({
        action: 'scroll',
        category: 'User Interaction',
        label: componentName,
      });
    };

    const trackClick = (e) => {
      const target = e.target.closest('button, a');
      if (target) {
        event({
          action: 'click',
          category: 'User Interaction',
          label: `${componentName} - ${target.textContent || target.getAttribute('aria-label')}`,
        });
      }
    };

    // Debounced scroll listener
    let scrollTimeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(trackScroll, 1000);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', trackClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', trackClick);
    };
  }, [componentName]);
};
