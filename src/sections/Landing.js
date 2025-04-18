import React from "react";
import Ring from "../components/Ring";

export default function Landing() {
  return (
    <section id="landing" className="min-h-screen flex items-center">
      <div className="container mx-auto flex px-6 md:px-10 py-16 md:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fadeIn">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Hi, I'm Ashtin.
            <br className="hidden lg:inline-block" />I love to build amazing things.
          </h1>
          <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
            I am passionate about creating websites, apps, and developing skills in music, gardening, business, and coding. Collaboration is key to achieving extraordinary results. Let's build something incredible together.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-flex items-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition-colors duration-300"
              aria-label="View Portfolio"
            >
              View Portfolio
            </a>
            <a
              href="#skills"
              className="inline-flex items-center text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white rounded text-lg transition-colors duration-300"
              aria-label="View Skills & Technologies"
            >
              Skills & Technologies
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Ashtin-Walter" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                <i className="fa-brands fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/ashtin-walter-b60709250/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 dark:text-gray-400 hover:scale-110 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                <i className="fa-brands fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fadeIn">
          <div className="relative hover:scale-105 transition-transform duration-500">
            <Ring />
          </div>
        </div>
      </div>
    </section>
  );
}
