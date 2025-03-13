import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10 transition-all duration-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <p className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl hover:text-gray-400 transition-colors duration-300" aria-label="About Ashtin Walter">
            Ashtin Walter
          </a>
        </p>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex w-full md:w-auto md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex-col md:flex-row items-center text-base`}>
          {["projects", "skills", "learning-research", "testimonials"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`mr-5 py-2 md:py-0 transition-colors duration-300 ${
                activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              aria-label={`View ${section.charAt(0).toUpperCase() + section.slice(1)}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center bg-gray-700 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded text-white transition-colors duration-300 mt-4 md:mt-0"
          aria-label="Contact Ashtin Walter"
        >
          Get in Touch
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
