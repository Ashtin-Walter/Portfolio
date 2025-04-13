import { BeakerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useCallback, useMemo, memo } from "react";
import { websites, projects, games } from "../data";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const allProjects = useMemo(() => [...websites, ...projects, ...games], []);

  const filteredProjects = useMemo(() => {
    let result = filter === "all" 
      ? allProjects 
      : allProjects.filter(project => project.category === filter);
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        (project.skills && Array.isArray(project.skills) && 
          project.skills.some(skill => 
            typeof skill === 'string' && skill.toLowerCase().includes(query)
          ))
      );
    }
    
    return result;
  }, [allProjects, filter, searchQuery]);

  return (
    <section id="projects" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow"><BeakerIcon className="mx-auto w-10 mb-4 text-green-500 dark:text-green-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            I've worked on a diverse range of projects, both for clients and personal growth. 
            Here are some of the highlights.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["all", "freelance", "personal", "game"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${filter === category 
                    ? 'bg-green-500 dark:bg-green-400 text-white dark:text-gray-900' 
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-green-400/20 hover:text-gray-900 dark:hover:text-green-300'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria</p>
            <button 
              onClick={() => {setFilter("all"); setSearchQuery("");}}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Wrap ProjectCard with React.memo
const ProjectCard = memo(function ProjectCard({ project }) {
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
          <span key={skill} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-green-700 dark:text-green-400 rounded">
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
      {/* Consider adding project.image here with loading="lazy" if applicable */}
      {/* Example: <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-300" /> */}
      <div className="relative h-96 w-full overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-800 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 group-hover:border-green-400">
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
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-black/40 dark:bg-black/50 backdrop-blur-sm">
          <span className="px-3 py-1 text-xs font-medium bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 rounded-full mb-4">
            {project.subtitle}
          </span>
          <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
          <p className="text-sm text-gray-200 dark:text-gray-300 text-center mb-4">{project.description}</p>
          
          {/* Tech Stack */}
          {renderSkills()}
          
          {/* Project Links */}
          <div className="flex gap-4 mt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-green-500 dark:bg-green-400 text-white dark:text-gray-900 rounded hover:bg-green-600 dark:hover:bg-green-500 transition-colors"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-green-400 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}); // Close memo wrapper
