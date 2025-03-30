import React, { useState } from "react";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import Research from "./sections/Research";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";
import Timeline from "./sections/Timeline";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main className={`${isDarkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-800'} body-font transition-colors duration-300`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Landing />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Research />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
