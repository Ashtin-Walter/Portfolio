// filepath: d:\Walter House\Web Dev\GitHub\Portfolio 2.0\src\sections\Toolshed.js
import { WrenchScrewdriverIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState, useMemo, memo, useCallback } from "react";
import { tools } from "../data";

// Memoized category stats component
const CategoryStats = memo(({ category, count }) => (
  <div className="text-center transform hover:scale-105 transition-all duration-300">
    <div className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500 bg-clip-text text-transparent">
      {count}
    </div>
    <div className="text-sm text-gray-500 dark:text-gray-400">
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
  </div>
));

CategoryStats.displayName = 'CategoryStats';

// Memoized filter button component
const FilterButton = memo(({ category, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg hover:shadow-amber-500/25'
        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
    }`}
  >
    {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
  </button>
));

FilterButton.displayName = 'FilterButton';

// Memoized tool card component
const ToolCard = memo(({ tool }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]">
      {/* Top section with enhanced rustic effect */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 dark:from-amber-900/20 dark:via-amber-800/20 dark:to-amber-900/20">
        {/* Improved wood grain texture */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-repeat transform group-hover:scale-110"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v20H0zm0 40h100v20H0zm0 40h100v20H0z' fill='%23997555' fill-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Enhanced corner nail effects */}
        {['-top -left', '-top -right', 'bottom-14 -left', 'bottom-14 -right'].map((position) => (
          <div 
            key={position}
            className={`absolute ${position.replace('-', ' ')} m-2 w-3 h-3 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 shadow-lg`}
            style={{ boxShadow: '0 0 10px rgba(217, 119, 6, 0.3)' }}
          />
        ))}
        
        {/* Icon/Image with enhanced effects */}
        <div className="absolute inset-0 flex items-center justify-center">
          {tool.image ? (
            <img 
              src={tool.image} 
              alt={tool.title} 
              className="w-16 h-16 object-contain filter drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500 transform group-hover:scale-110 z-10"
              loading="lazy"
            />
          ) : (
            <WrenchScrewdriverIcon className="w-16 h-16 text-amber-600 dark:text-amber-500 drop-shadow-md group-hover:drop-shadow-xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 group-hover:text-amber-700 dark:group-hover:text-amber-400 z-10" />
          )}
        </div>
        
        {/* Enhanced title bar with better wood texture */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-amber-800/90 to-amber-700/90 dark:from-amber-900/90 dark:to-amber-800/90 text-white p-3 border-t-2 border-amber-600/30 shadow-inner transform translate-y-0 transition-all duration-300">
          <h3 className="text-lg font-bold truncate group-hover:text-amber-100 transition-colors duration-300">
            {tool.title}
          </h3>
          <p className="text-sm text-amber-200/90 dark:text-amber-200/80 truncate">
            {tool.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section with enhanced styling */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-gradient-to-b from-transparent via-amber-50/5 to-amber-100/10 dark:from-transparent dark:via-amber-900/5 dark:to-amber-800/10">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3 relative z-10 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
          {tool.description}
        </p>
        
        {/* Enhanced technology tags */}
        {tool.skills && (
          <div className="mb-4 flex flex-wrap gap-2 relative z-10">
            {tool.skills.map((skill, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 text-amber-800 dark:text-amber-300 rounded-full group-hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        
        {/* Enhanced action links */}
        <div className="flex justify-between items-center mt-auto pt-3 border-t border-amber-200 dark:border-amber-800/30 relative z-10">
          <a
            href={tool.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 text-sm font-medium text-amber-600 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400 transition-all duration-300 hover:translate-x-1"
          >
            Use Tool
            <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

ToolCard.displayName = 'ToolCard';

// Main component
export default function Toolshed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Memoized category counts
  const categoryCounts = useMemo(() => {
    const counts = {};
    tools.forEach(tool => {
      const category = tool.category || "other";
      counts[category] = (counts[category] || 0) + 1;
    });
    return counts;
  }, []);

  // Memoized filtered tools
  const filteredTools = useMemo(() => {
    let result = tools;
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(tool => 
        tool.title.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        (tool.skills || []).some(skill => 
          typeof skill === 'string' && skill.toLowerCase().includes(q)
        )
      );
    }
    if (categoryFilter !== 'all') {
      result = result.filter(tool => tool.category === categoryFilter);
    }
    return result;
  }, [searchQuery, categoryFilter]);

  // Memoized filter click handler
  const handleFilterClick = useCallback((category) => {
    setCategoryFilter(category);
  }, []);

  return (
    <section id="toolshed" className="body-font py-10">
      <div className="container px-5 mx-auto text-center lg:px-40">
        {/* Section Header with enhanced animations */}
        <div className="flex flex-col w-full mb-10">
          <div className="animate-bounce-slow">
            <WrenchScrewdriverIcon className="mx-auto w-10 mb-4 text-amber-600 dark:text-amber-500 transform hover:rotate-180 transition-all duration-700" />
          </div>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-500">
            The Toolshed
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 dark:text-gray-400">
            A collection of practical utilities and tools I've crafted to help solve everyday problems.
          </p>
          
          {/* Enhanced stats row */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 mb-4">
            <CategoryStats category="total" count={tools.length} />
            {Object.entries(categoryCounts).map(([category, count]) => (
              <CategoryStats key={category} category={category} count={count} />
            ))}
          </div>
          
          {/* Enhanced category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['all', ...Object.keys(categoryCounts)].map(cat => (
              <FilterButton
                key={cat}
                category={cat}
                isActive={categoryFilter === cat}
                onClick={() => handleFilterClick(cat)}
              />
            ))}
          </div>
          
          {/* Enhanced CTA button */}
          <div className="mt-4">
            <a
              href="https://tools.walterhouse.co.za"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg text-white 
                bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 
                transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Visit The Toolshed
              <WrenchScrewdriverIcon className="ml-2 -mr-1 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Enhanced search with focus effects */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className={`h-5 w-5 transition-colors duration-300 ${
                isSearchFocused ? 'text-amber-500' : 'text-gray-400 dark:text-gray-500'
              }`} />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg
                bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                placeholder-gray-500 dark:placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500
                transition-all duration-300"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
        </div>

        {/* Tools Grid with fade-in animation */}
        {filteredTools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.id}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 animate-fadeIn">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              No tools found matching your search
            </p>
            <button 
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg
                hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105
                shadow-md hover:shadow-lg hover:shadow-amber-500/25"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}