import React, { useState, lazy, Suspense, useEffect } from "react"; // Import useEffect
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the new component

// Lazy load less critical sections for performance
const LazyAbout = lazy(() => import("./sections/About"));
const LazyTimeline = lazy(() => import("./sections/Timeline"));
const LazyProjects = lazy(() => import("./sections/Projects"));
const LazyArcade = lazy(() => import("./sections/Arcade")); // Add Arcade import
const LazySkills = lazy(() => import("./sections/Skills"));
const LazyResearch = lazy(() => import("./sections/Research"));
const LazyTestimonials = lazy(() => import("./sections/Testimonials"));
const LazyContact = lazy(() => import("./sections/Contact"));
const Blog = lazy(() => import("./sections/Blog"));

export default function App() {
  // Initialize state from localStorage or default to true (dark mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Effect to update localStorage and HTML class when isDarkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = isDarkMode ? 'dark' : 'light';
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [isDarkMode]);

  // Determine theme class based on isDarkMode state (for main element if needed, though less critical now)
  const themeClass = isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-800';

  return (
    // Apply theme class and transition properties to the main element
    <main className={`${themeClass} body-font transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Landing />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <LazyAbout />
        <LazyTimeline />
        <LazyProjects />
        <LazyArcade /> {/* Add Arcade section here */}
        <LazySkills />
        <LazyResearch />
        <Blog />
        <LazyTestimonials />
        <LazyContact />
      </Suspense>
      <Footer />
      <ScrollToTopButton isDarkMode={isDarkMode} /> {/* Add the button here */}
    </main>
  );
}
