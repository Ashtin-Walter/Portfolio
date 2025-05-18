import { ArrowRightIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    if (location.pathname === '/') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-800 md:sticky top-0 z-50 transition-colors duration-300 shadow-sm dark:shadow-none">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-gray-900 dark:text-white mb-4 md:mb-0">
          <button 
            onClick={() => handleNavigation("about")} 
            className="ml-3 text-xl hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
            aria-label="About Ashtin Walter"
          >
            Ashtin Walter
          </button>
        </p>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-200 dark:md:border-gray-700 flex-col md:flex-row items-center text-base`}>
          {[
            { id: "freelance-projects", label: "Freelance Work" },
            { id: "toolshed", label: "Toolshed" },
            { id: "arcade", label: "Arcade" },
            { id: "personal-projects", label: "Personal Projects" },
            { id: "skills", label: "Skills" },
            { id: "learning-research", label: "Learning Research" },
            { id: "testimonials", label: "Testimonials" }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavigation(section.id)}
              className={`mr-5 py-2 md:py-0 transition-colors duration-300 ${
                activeSection === section.id ? 'text-green-600 dark:text-white font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label={`View ${section.label}`}
              aria-current={activeSection === section.id ? "page" : undefined}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Dark/Light Mode Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mr-4 p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <SunIcon className="w-5 h-5 text-yellow-300" />
          ) : (
            <MoonIcon className="w-5 h-5 text-indigo-500" />
          )}
        </button>

        <button
          onClick={() => handleNavigation("contact")}
          className="inline-flex items-center bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-transparent py-2 px-4 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-gray-800 dark:text-white transition-colors duration-300 mt-4 md:mt-0"
          aria-label="Contact Ashtin Walter"
        >
          Get in Touch
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
}
