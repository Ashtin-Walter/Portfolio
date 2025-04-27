import { BeakerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useCallback, useMemo, memo } from "react";
import { websites } from "../data";

export default function FreelanceProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(3);
  const freelanceProjects = websites; // Using only the websites array which contains freelance projects

  const filteredProjects = useMemo(() => {
    let result = freelanceProjects;
    
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
  }, [freelanceProjects, searchQuery]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, displayCount);
  }, [filteredProjects, displayCount]);

  const showMoreProjects = () => {
    setDisplayCount(filteredProjects.length);
  };

  const showLessProjects = () => {
    setDisplayCount(3);
    // Scroll back to the projects section
    document.getElementById('freelance-projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="freelance-projects" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow"><BeakerIcon className="mx-auto w-10 mb-4 text-green-500 dark:text-green-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            Freelance Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            Professional projects I've completed for clients, showcasing my skills in web development and digital marketing.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150 ease-in-out"
              placeholder="Search freelance projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            {/* Show More/Less Buttons */}
            {filteredProjects.length > 3 && (
              <div className="mt-12">
                {displayCount < filteredProjects.length ? (
                  <button
                    onClick={showMoreProjects}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors shadow-md"
                  >
                    Show More Projects ({filteredProjects.length - displayCount} more)
                  </button>
                ) : (
                  <button
                    onClick={showLessProjects}
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors shadow-md"
                  >
                    Show Less
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found matching your criteria</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setDisplayCount(3);
              }}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 transition-colors"
            >
              Clear Search
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
});
