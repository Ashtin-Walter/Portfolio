import { ArrowRightIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect, useCallback, memo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { navigation } from "../data";

// Memoize NavLink component for better performance
const NavLink = memo(({ section, activeSection, handleNavigation }) => (
  <button
    onClick={() => handleNavigation(section.id)}
    className={`group mr-5 py-2 md:py-0 transition-all duration-300 relative ${
      activeSection === section.id 
        ? 'text-green-600 dark:text-white font-medium' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
    }`}
    aria-label={`View ${section.label}`}
    aria-current={activeSection === section.id ? "page" : undefined}
  >
    {section.label}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full ${
      activeSection === section.id ? 'w-full' : ''
    }`} />
  </button>
));

NavLink.displayName = 'NavLink';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Memoize scroll handler
  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    setIsScrolled(scrollY > 20);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 80;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveSection(sectionId);
      }
    });
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, handleScroll]);

  const handleNavigation = useCallback((sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);
  const { main: navSections } = navigation;

  return (
    <header 
      className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm md:sticky top-0 z-50 
        transition-all duration-300 ${isScrolled ? 'shadow-lg dark:shadow-black/20' : ''}`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-gray-900 dark:text-white mb-4 md:mb-0">
          <button 
            onClick={() => handleNavigation("about")} 
            className="ml-3 text-xl hover:text-green-600 dark:hover:text-green-400 transition-all duration-300
              relative group"
            aria-label="About Ashtin Walter"
          >
            Ashtin Walter
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 
              group-hover:w-full" />
          </button>
        </p>
        
        {/* Mobile menu button */}
        <button
          className={`md:hidden ml-auto text-gray-700 dark:text-gray-300 hover:text-green-600 
            dark:hover:text-white p-2 rounded-lg transition-colors duration-300 ${
              isOpen ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg 
            className="w-6 h-6 transition-transform duration-300" 
            style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        <nav 
          className={`${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 md:max-h-screen opacity-0 md:opacity-100'
          } md:flex w-full md:w-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 
            md:border-gray-200 dark:md:border-gray-700 flex-col md:flex-row items-center 
            text-base overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {navSections.map((section) => (
            <NavLink
              key={section.id}
              section={section}
              activeSection={activeSection}
              handleNavigation={handleNavigation}
            />
          ))}
        </nav>

        {/* Dark/Light Mode Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="mr-4 p-2 rounded-full text-gray-600 dark:text-gray-400 
            hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300
            hover:rotate-[360deg] transform"
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
          className="inline-flex items-center bg-green-500 hover:bg-green-600 
            dark:bg-green-600 dark:hover:bg-green-700 text-white py-2 px-4 
            rounded-lg transform transition-all duration-300 
            hover:translate-x-1 hover:shadow-lg shadow-md
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
            dark:focus:ring-offset-gray-800"
          aria-label="Contact Ashtin Walter"
        >
          Get in Touch
          <ArrowRightIcon className="w-4 h-4 ml-1 transition-transform duration-300 
            group-hover:translate-x-1" />
        </button>
      </div>
    </header>
  );
}
