import { CodeBracketIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { projects } from "../data";
import { Link } from "react-router-dom";

export default function PersonalProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    let result = projects;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(project => 
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        (project.skills || []).some(skill => 
          typeof skill === 'string' && skill.toLowerCase().includes(q)
        )
      );
    }
    if (categoryFilter !== 'all') {
      result = result.filter(project => project.category === categoryFilter);
    }
    return result;
  }, [searchQuery, categoryFilter]);

  // Get the counts of projects by category
  const categoryCounts = useMemo(() => {
    const counts = {};
    projects.forEach(project => {
      const category = project.category || "other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="personal-projects" className="body-font py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow"><CodeBracketIcon className="mx-auto w-10 mb-4 text-indigo-500 dark:text-indigo-400" /></div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white">
            Personal Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            Projects I've built to explore new technologies, experiment with creative ideas, and continuously improve my skills.
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400">{projects.length}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Total Projects</div>
            </div>
            
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div key={category} className="text-center">
                <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">{count}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              </div>
            ))}
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['all', ...Object.keys(categoryCounts)].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Link to dedicated page */}
          <div className="mt-4">
            <Link
              to="/personal-projects"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              View All Projects
              <CodeBracketIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              placeholder="Search personal projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
              }}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Enhanced ProjectCard Component with matrix-like effect
function ProjectCard({ project }) {
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const charactersRef = useRef([]);
  
  // Matrix effect setup and animation
  useEffect(() => {
    if (!isHovering || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix characters setup
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Use tech-related characters instead of just katakana
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ</>{}[]#;:~JSHTMLCSSconstletfunction'.split('');
    
    // Initialize characters if not already done
    if (charactersRef.current.length === 0) {
      charactersRef.current = Array(columns).fill(0);
    }
    
    // Matrix rain drawing function
    const drawMatrix = () => {
      // Semi-transparent overlay to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set green text color typical of matrix effect, using indigo to match theme
      ctx.fillStyle = '#6366f1'; // Indigo-500
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < charactersRef.current.length; i++) {
        // Pick a random character
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Position and draw the character
        const x = i * fontSize;
        const y = charactersRef.current[i] * fontSize;
        
        // Add white/brighter color highlight for some characters
        if (Math.random() > 0.98) {
          ctx.fillStyle = '#c7d2fe'; // Indigo-200
        } else {
          ctx.fillStyle = '#6366f1'; // Indigo-500
        }
        
        ctx.fillText(char, x, y);
        
        // Reset or move the character down
        if (y > canvas.height && Math.random() > 0.975) {
          charactersRef.current[i] = 0;
        } else {
          charactersRef.current[i]++;
        }
      }
      
      // Continue animation
      animationRef.current = requestAnimationFrame(drawMatrix);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(drawMatrix);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);
  
  const renderSkills = () => {
    if (!project.skills) return null;
    
    const skillsArray = Array.isArray(project.skills) 
      ? project.skills 
      : project.skills.split(',');

    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {skillsArray.map((skill) => (
          <span key={skill} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-800 text-indigo-700 dark:text-indigo-400 rounded">
            {typeof skill === 'string' ? skill.trim() : skill}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div 
      className="relative group block transform transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        // Reset characters for next hover
        charactersRef.current = [];
      }}
    >
      <div className="relative h-96 w-full overflow-hidden rounded-lg border-2 border-gray-300 dark:border-gray-800 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-all duration-300 group-hover:border-indigo-400 shadow-md hover:shadow-lg">
        {/* Matrix-like canvas effect */}
        <canvas 
          ref={canvasRef} 
          className={`absolute inset-0 z-0 w-full h-full transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Content overlay - slightly transparent to see matrix effect */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 bg-black/70 dark:bg-black/80 backdrop-blur-sm transition-all duration-300">
          {/* Project badge */}
          <span className="px-3 py-1 text-xs font-medium bg-indigo-500 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-full mb-4 shadow-glow-indigo">
            {project.subtitle}
          </span>
          
          {/* Project title with glow effect */}
          <h2 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-indigo-300 group-hover:text-shadow-glow">
            {project.title}
          </h2>
          
          {/* Project description */}
          <p className="text-sm text-gray-200 dark:text-gray-300 text-center mb-4 max-w-xs mx-auto">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          {renderSkills()}
          
          {/* Project Links */}
          <div className="flex gap-4 mt-6">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-indigo-500 dark:bg-indigo-400 text-white dark:text-gray-900 rounded hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors transform hover:scale-105 hover:shadow-md"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-indigo-400 rounded hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors transform hover:scale-105 hover:shadow-md"
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