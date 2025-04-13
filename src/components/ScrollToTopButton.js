import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

// Removed isDarkMode prop
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
