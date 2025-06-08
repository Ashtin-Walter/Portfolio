import React, { useEffect } from 'react';
import { event } from '../utils/analytics.ts';

// Higher Order Component for analytics tracking
export const withAnalytics = (WrappedComponent) => {
  return function WithAnalyticsWrapper(props) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    useEffect(() => {
      // Track component mount
      event({
        action: 'component_view',
        category: 'Component Lifecycle',
        label: componentName,
      });

      // Track visibility using Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              event({
                action: 'component_visible',
                category: 'User Engagement',
                label: componentName,
              });
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the component is visible
      );

      // Get the DOM node
      const element = document.querySelector(`[data-component="${componentName}"]`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, []);

    // Add click tracking to the component
    const handleClick = (e) => {
      const target = e.target.closest('button, a, [role="button"]');
      if (target) {
        event({
          action: 'click',
          category: 'User Interaction',
          label: `${componentName} - ${target.textContent || target.getAttribute('aria-label') || 'unknown'}`,
        });
      }
    };

    return (
      <div onClick={handleClick} data-component={componentName}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
