import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Throttle scroll events for better performance
  const toggleVisibility = useCallback(() => {
    const scrolled = window.pageYOffset > 300;
    if (scrolled !== isVisible) {
      setIsVisible(scrolled);
    }
  }, [isVisible]);

  // Scroll smoothly to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    let timeoutId = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(toggleVisibility, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [toggleVisibility]);

  // Use dark: variants for styling
  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 
                     bg-gray-300 hover:bg-gray-400 text-gray-800 
                     dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white`}
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
