import { CodeBracketIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo, useCallback } from "react";
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
    const counts = { all: projects.length };
    projects.forEach(project => {
      const category = project.category || "other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCategoryChange = useCallback((cat) => {
    setCategoryFilter(cat);
    setSearchQuery(""); // Clear search when changing category
  }, []);

  const handleClearFilters = useCallback(() => {
    setSearchQuery("");
    setCategoryFilter("all");
  }, []);

  return (
    <section id="personal-projects" className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10" />
      <div className="container px-5 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-block p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 mb-4">
            <CodeBracketIcon className="w-10 h-10 text-indigo-500 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Personal Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring new technologies and building creative solutions through personal projects.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {Object.entries(categoryCounts).map(([category, count], index) => (
            <div 
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700
                opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">
                {count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {category === 'all' ? 'Total Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 animate-fadeInUp" 
          style={{ animationDelay: '400ms' }}>
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(categoryCounts).map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                  ${categoryFilter === cat
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
              >
                {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-auto min-w-[300px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                placeholder-gray-500 dark:placeholder-gray-400
                focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                transition duration-150 ease-in-out"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 animate-fadeIn">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No projects found matching your criteria
            </p>
            <button 
              onClick={handleClearFilters}
              className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 
                transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* View All Link */}
        <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <Link
            to="/personal-projects"
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg
              text-white bg-indigo-500 hover:bg-indigo-600 
              transition-all duration-300 transform hover:scale-105
              shadow-md hover:shadow-xl"
          >
            View All Projects
            <CodeBracketIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <div 
      className="group opacity-0 animate-fadeInUp"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 
        bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900
        transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
          dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))] z-0" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 
          bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 
          group-hover:bg-white/90 dark:group-hover:bg-gray-800/90"
        >
          {/* Project Badge */}
          <span className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 
            text-indigo-600 dark:text-indigo-300 rounded-full mb-4 transform transition-all duration-300
            translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {project.subtitle}
          </span>
          
          {/* Project Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center
            group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
          >
            {project.title}
          </h2>
          
          {/* Project Description */}
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6 max-w-xs">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {project.skills?.map((skill) => (
              <span 
                key={skill} 
                className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 
                  text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600
                  transition-transform duration-300 hover:scale-105"
              >
                {typeof skill === 'string' ? skill.trim() : skill}
              </span>
            ))}
          </div>
          
          {/* Project Links */}
          <div className="flex gap-4 transform transition-all duration-300 translate-y-2 opacity-0 
            group-hover:translate-y-0 group-hover:opacity-100"
          >
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
                  bg-indigo-500 text-white hover:bg-indigo-600
                  transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium rounded-lg
                  bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300
                  hover:bg-gray-200 dark:hover:bg-gray-600
                  transition-all duration-300 transform hover:scale-105 hover:shadow-md
                  border border-gray-200 dark:border-gray-600"
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