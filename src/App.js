import React, { useState, lazy, Suspense, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Landing from "./sections/Landing";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Lazy load sections
const LazyAbout = lazy(() => import("./sections/About"));
const LazyTimeline = lazy(() => import("./sections/Timeline"));
const LazyProjects = lazy(() => import("./sections/Projects"));
const LazyArcade = lazy(() => import("./sections/Arcade")); 
const LazySkills = lazy(() => import("./sections/Skills"));
const LazyResearch = lazy(() => import("./sections/Research"));
const LazyTestimonials = lazy(() => import("./sections/Testimonials"));
const LazyContact = lazy(() => import("./sections/Contact"));
const Blog = lazy(() => import("./sections/Blog"));
const ArcadePage = lazy(() => import("./pages/ArcadePage"));

function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  const location = useLocation();

  // Effect to update localStorage and HTML class when isDarkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = isDarkMode ? 'dark' : 'light';
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [isDarkMode]);

  // Handle navigation from arcade page
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  // Determine theme class based on isDarkMode state
  const themeClass = isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-800';

  return (
    <main className={`${themeClass} body-font transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <LazyAbout />
              <LazyTimeline />
              <LazyProjects />
              <LazyArcade />
              <LazySkills />
              <LazyResearch />
              <Blog />
              <LazyTestimonials />
              <LazyContact />
            </>
          } />
          <Route path="/arcade" element={<ArcadePage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTopButton isDarkMode={isDarkMode} />
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
