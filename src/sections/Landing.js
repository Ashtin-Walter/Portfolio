import React from "react";
import Ring from "../components/Ring";
import { personalInfo, contactInfo } from "../data";

export default function Landing() {
  return (
    <section id="landing" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex px-6 md:px-10 py-16 md:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="animate-fadeIn">
            <span className="text-green-600 dark:text-green-400 text-lg font-medium mb-2 block">
              Welcome to my portfolio
            </span>
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900 dark:text-white">
              Hi, I'm Ashtin.              <br className="hidden lg:inline-block" />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                {personalInfo.headline}
              </span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              {personalInfo.intro}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fadeIn animation-delay-200">
            <button
              onClick={() => document.getElementById('freelance-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center text-white bg-gradient-to-r from-green-500 to-green-600 border-0 py-3 px-8 focus:outline-none hover:from-green-600 hover:to-green-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="View Portfolio"
            >
              View Portfolio
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 py-3 px-8 focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="View Skills & Technologies"
            >
              Skills & Technologies
            </button>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0 animate-fadeIn animation-delay-400">              <a 
                href={contactInfo.social.github.url} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={contactInfo.social.github.label} 
                className="text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
              >
                <i className="fa-brands fa-github text-3xl"></i>
              </a>
              <a 
                href={contactInfo.social.linkedin.url} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={contactInfo.social.linkedin.label} 
                className="text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin text-3xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeIn animation-delay-300">
          <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-3">
            <div className="absolute -inset-1 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Ring />
          </div>
        </div>
      </div>
    </section>
  );
}
