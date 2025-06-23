import React, { useState, lazy, Suspense, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ErrorBoundary from "./ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";
import { measurePerformance } from "./utils/performance";

// Scroll to top component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Lazy load sections
const LazyLanding = lazy(() => import("./sections/Landing"));
const LazyAbout = lazy(() => import("./sections/About"));
const LazyFreelanceProjects = lazy(() => import("./sections/Projects"));
const LazyPersonalProjects = lazy(() => import("./sections/PersonalProjects"));
const LazyArcade = lazy(() => import("./sections/Arcade")); 
const LazySkills = lazy(() => import("./sections/Skills"));
const LazyResearch = lazy(() => import("./sections/Research"));
const LazyTestimonials = lazy(() => import("./sections/Testimonials"));
const LazyContact = lazy(() => import("./sections/Contact"));
const LazyToolshed = lazy(() => import("./sections/Toolshed"));
const Blog = lazy(() => import("./sections/Blog"));
const PrivacyPolicy = lazy(() => import("./sections/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./sections/TermsOfService"));


function AppContent() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  
  const location = useLocation();

  // Performance monitoring in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      measurePerformance.logWebVitals();
      measurePerformance.measurePageLoad();
    }
  }, []);

  // Effect to update localStorage and HTML class when isDarkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = isDarkMode ? 'dark' : 'light';
    root.classList.remove(isDarkMode ? 'light' : 'dark');
    root.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [isDarkMode]);

  // Handle navigation from other pages and scroll to specific sections
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (location.pathname === '/' && !location.state?.scrollTo) {
      // Ensure we start at the top for the home page
      window.scrollTo(0, 0);
    }
  }, [location]);  

  // Determine theme class based on isDarkMode state
  const themeClass = isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-800';

  return (
    <main id="main-content" className={`${themeClass} body-font transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={
              <>
                <LazyLanding />
                <LazyAbout />
                <LazyFreelanceProjects />
                <LazyToolshed />
                <LazyArcade />
                <LazyPersonalProjects />
                <LazySkills />
                <LazyResearch />
                <Blog />
                <LazyTestimonials />
                <LazyContact />
              </>
            } />
            
            {/* Add the dedicated Personal Projects page route */}
            <Route path="/personal-projects" element={
              <>
                <div className="py-20">
                  <LazyPersonalProjects />
                </div>
                <LazyContact />
              </>
            } />
            
            {/* Privacy Policy and Terms of Service routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            
            {/* 404 NotFound route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <ScrollToTopButton isDarkMode={isDarkMode} />
    </main>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Helmet>
          <title>Ashtin Walter | Portfolio</title>
          <meta name="description" content="Portfolio of Ashtin Walter: Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies." />
        </Helmet>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
