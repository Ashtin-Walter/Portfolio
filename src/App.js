import React, { useState, lazy, Suspense, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ErrorBoundary from "./ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import NotFound from "./components/NotFound";
import { initGA, pageview, trackWebVitals } from './utils/analytics.ts';
import { withAnalytics } from './components/withAnalytics';

// Lazy load sections and wrap with analytics HOC
const LazyLanding = withAnalytics(lazy(() => import("./sections/Landing")));
const LazyAbout = withAnalytics(lazy(() => import("./sections/About")));
const LazyFreelanceProjects = withAnalytics(lazy(() => import("./sections/Projects")));
const LazyPersonalProjects = withAnalytics(lazy(() => import("./sections/PersonalProjects")));
const LazyArcade = withAnalytics(lazy(() => import("./sections/Arcade"))); 
const LazySkills = withAnalytics(lazy(() => import("./sections/Skills")));
const LazyResearch = withAnalytics(lazy(() => import("./sections/Research")));
const LazyTestimonials = withAnalytics(lazy(() => import("./sections/Testimonials")));
const LazyContact = withAnalytics(lazy(() => import("./sections/Contact")));
const LazyToolshed = withAnalytics(lazy(() => import("./sections/Toolshed")));
const Blog = withAnalytics(lazy(() => import("./sections/Blog")));


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

  // Initialize Google Analytics and track page views
  useEffect(() => {
    initGA();
    pageview(window.location.pathname);

    // Track web vitals
    if ('web-vitals' in window) {
      window.webVitals.getCLS((metric) => trackWebVitals(metric));
      window.webVitals.getFID((metric) => trackWebVitals(metric));
      window.webVitals.getLCP((metric) => trackWebVitals(metric));
    }
  }, []);

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
        <Helmet>
          <title>Ashtin Walter | Portfolio</title>
          <meta name="description" content="Portfolio of Ashtin Walter: Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies." />
        </Helmet>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}
