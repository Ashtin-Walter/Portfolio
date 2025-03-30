import { BeakerIcon } from "@heroicons/react/24/solid";
import React, { useState, useCallback } from "react";
import { websites, projects, games } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const allProjects = [...websites, ...projects, ...games];

  const filteredProjects = filter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow"><BeakerIcon className="mx-auto w-10 mb-4 text-green-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’ve worked on a diverse range of projects, both for clients and personal growth. 
            Here are some of the highlights.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["all", "freelance", "personal", "game"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === category 
                  ? 'bg-green-400 text-gray-900' 
                  : 'bg-gray-800 text-gray-400 hover:bg-green-400/20'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, []);

  const renderSkills = () => {
    if (!project.skills) return null;
    
    const skillsArray = Array.isArray(project.skills) 
      ? project.skills 
      : project.skills.split(',');

    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {skillsArray.map((skill) => (
          <span key={skill} className="px-2 py-1 text-xs bg-gray-800 text-green-400 rounded">
            {typeof skill === 'string' ? skill.trim() : skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="relative group block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="relative h-96 w-full overflow-hidden rounded-lg border-2 border-gray-800 bg-gradient-to-br from-gray-800 to-gray-900 transition-all duration-300 group-hover:border-green-400">
        <div 
          className="absolute inset-0 z-0 transition-all duration-200 ease-out"
          style={{
            background: isHovering
              ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(74, 222, 128, 0.3), transparent 25%)`
              : 'none',
            opacity: isHovering ? 1 : 0,
            mixBlendMode: 'plus-lighter',
          }}
        />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <span className="px-3 py-1 text-xs font-medium bg-green-400 text-gray-900 rounded-full mb-4">
            {project.subtitle}
          </span>
          <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-sm text-gray-300 text-center mb-4">{project.description}</p>
          
          {/* Tech Stack */}
          {renderSkills()}
          
          {/* Project Links */}
          <div className="flex gap-4 mt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-green-400 text-gray-900 rounded hover:bg-green-500 transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gray-800 text-green-400 rounded hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
